import WeightedList from "js-weighted-list"
import { useDispatch, useSelector } from "react-redux"
import generateArmor from "@functions/generateArmor"
import generateWeapon from "@functions/generateWeapon"
import { addMessage } from "@reducers/eventReducer"
import { addBackpag, updateMoney, updateStones } from "@reducers/playerReducer"
import { useTranslation } from "react-i18next"
import useAchieve from "./useAchieves"

function useReward() {
	const { trullyKarma } = useSelector(state => state.player.stats)
	const dispatch = useDispatch()
	const { t } = useTranslation("messages", { keyPrefix: "reward" })
	const { unlockHammerBro } = useAchieve()

	const rewards = new WeightedList([
		["money", 42.5],
		["stones", 42.5],
		["item", 15000],
	])

	//Logic
	const getMoney = () => {
		const defaultMoney = Math.random() * 11 + 1

		const money = defaultMoney + defaultMoney * (trullyKarma - 1)

		return money > defaultMoney ? money : defaultMoney
	}

	const getStones = () => {
		const defaultStones = Math.random() * 3 + 2

		const stones = defaultStones + defaultStones * (trullyKarma - 1)

		return stones > defaultStones ? stones : defaultStones
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
			const money = Math.floor(getMoney())

			dispatch(addMessage(t("get money", { money })))
			dispatch(updateMoney(money))
		}

		if (reward == "stones") {
			const stones = Math.floor(getStones())

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
