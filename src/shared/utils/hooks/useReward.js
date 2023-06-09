import WeightedList from "js-weighted-list"
import { useDispatch, useSelector } from "react-redux"
import generateArmor from "@functions/generateArmor"
import generateWeapon from "@functions/generateWeapon"
import { addMessage } from "@reducers/eventReducer"
import { addBackpag, updateMoney, updateStones } from "@reducers/playerReducer"
import { useTranslation } from "react-i18next"
import useAchieve from "./useAchieves"
import {
	MONEY_REWARD_BY_TRULLYKARMA,
	STONES_REWARD_BY_TRULLYKARMA,
} from "@constants/luckyScale"

function useReward() {
	const { trullyKarma } = useSelector(state => state.player.stats)
	const dispatch = useDispatch()
	const { t } = useTranslation("messages", { keyPrefix: "reward" })
	const { unlockHammerBro } = useAchieve()

	const rewards = new WeightedList([
		["money", 40],
		["stones", 40],
		["item", 20],
	])

	//Logic
	const getMoney = () => {
		const defaultMoney =
			Math.random() * 9 + 7 + trullyKarma * MONEY_REWARD_BY_TRULLYKARMA

		const money = defaultMoney + defaultMoney * (trullyKarma - 1)

		return Math.floor(money > defaultMoney ? money : defaultMoney)
	}

	const getStones = () => {
		const defaultStones =
			Math.random() * 3 + 1 + trullyKarma * STONES_REWARD_BY_TRULLYKARMA

		const stones = defaultStones + defaultStones * (trullyKarma - 1)

		return Math.floor(stones > defaultStones ? stones : defaultStones)
	}

	const getRandomItem = () => {
		const isArmor = Math.random() > 0.5

		const randomItem = isArmor
			? generateArmor({ trullyKarma })
			: generateWeapon({ trullyKarma })

		return randomItem
	}

	//Event
	const getReward = selectedReward => {
		const reward = selectedReward || rewards.peek()[0]

		if (reward == "money") {
			const money = getMoney()

			dispatch(addMessage(t("get money", { money })))
			dispatch(updateMoney(money))
		}

		if (reward == "stones") {
			const stones = getStones()

			dispatch(addMessage(t("get stones", { stones })))
			dispatch(updateStones(stones))
		}

		if (reward == "item") {
			const item = getRandomItem()

			if (item.type === "hammer") unlockHammerBro()

			dispatch(addMessage(t("get item", item)))
			dispatch(addBackpag({ item }))
		}
	}

	return { getReward }
}

export default useReward
