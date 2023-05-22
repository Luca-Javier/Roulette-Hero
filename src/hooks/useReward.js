import WeightedList from "js-weighted-list"
import { useDispatch, useSelector } from "react-redux"
import generateArmor from "@helpers/generateArmor"
import generateWeapon from "@helpers/generateWeapon"
import { addMessage } from "@reducers/eventReducer"
import { addBackpag, updateMoney, updateStones } from "@reducers/playerReducer"
import { useTranslation } from "react-i18next"

function useReward() {
	const { trullyKarma } = useSelector(state => state.player.stats)
	const dispatch = useDispatch()
	const { t } = useTranslation("messages", { keyPrefix: "reward" })

	const rewards = new WeightedList([
		["money", 42.5],
		["stones", 42.5],
		["item", 15000],
	])

	//Events
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

			dispatch(addMessage(t("get item", item)))
			dispatch(addBackpag({ item }))
		}
	}

	return { getReward }
}

export default useReward
