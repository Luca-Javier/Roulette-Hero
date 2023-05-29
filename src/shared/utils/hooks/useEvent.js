import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EVENT } from "@constants/events"
import {
	addEventNum,
	addMessage,
	cleanChat,
	cleanItemInfo,
	setRandomEvent,
	createRandomShopItems,
	removePuchasedItem,
	setEvent,
	setSection,
} from "@reducers/eventReducer"
import getWalkTime from "@functions/getWalkingTime"
import useReward from "./useReward"
import {
	addBackpag,
	updateMoney,
	updateKarma,
	updateLucky,
} from "@reducers/playerReducer"
import { useTranslation } from "react-i18next"
import { i18n_random } from "@functions/translators"
import useAchieve from "./useAchieves"
import { SECTIONS } from "@constants/sections"
import { useLastEvent } from "@contexts/useLastEvent"

function useEvent() {
	const { event, section } = useSelector(state => state.event)
	const { money: playerMoney, stats } = useSelector(state => state.player)
	const { trullyKarma } = stats
	const dispatch = useDispatch()
	const { getReward } = useReward()
	const { t } = useTranslation("messages")
	const { unlockAchieve } = useAchieve()
	const { lastEvent } = useLastEvent()

	const [customCallback, setCustomCallback] = useState()

	//Events which are just click the button or not
	const simpleEventCallback = () => {
		customCallback()
		dispatch(setEvent(EVENT.waiting))
	}

	const walk = () => {
		dispatch(setEvent(EVENT.walking))
		dispatch(setSection(SECTIONS.userStats))
	}

	const fight = () => {
		dispatch(cleanChat())
		dispatch(setEvent(EVENT.fighting))
	}

	const buyItem = item => {
		if (playerMoney < item.price * 2)
			return dispatch(addMessage(t("shop.not enough money")))

		if (item.type === "hammer") unlockAchieve(ACHIEVES["hammer bro"])

		dispatch(removePuchasedItem({ item }))

		dispatch(addBackpag({ item }))
		dispatch(updateMoney(-item.price * 2))
	}

	useEffect(() => {
		if (lastEvent.current === event) return undefined
		lastEvent.current = event

		if (event === EVENT.chest) {
			dispatch(addMessage(t("chest.found")))

			setCustomCallback(() => () => {
				getReward()
			})

			return undefined
		}

		if (event === EVENT.changeKarma) {
			const possibleRewards = ["money", "stones", "item"][
				Math.floor(Math.random() * 3)
			]

			setCustomCallback(() => () => {
				getReward(possibleRewards)
				dispatch(updateKarma(-0.3))
			})

			let key = "changeKarma."

			if (possibleRewards === "money") key += "money"

			if (possibleRewards === "stones") key += "stones"

			if (possibleRewards === "item") key += "item"

			const customMessage = i18n_random({ ns: "messages", key })

			dispatch(addMessage(t("changeKarma.price", { customMessage })))

			return undefined
		}

		if (event === EVENT.changeLucky) {
			const possibleRewards = ["money", "stones", "item"][
				Math.floor(Math.random() * 3)
			]

			setCustomCallback(() => () => {
				getReward(possibleRewards)
				dispatch(updateLucky(-2))
			})

			let key = "changeLucky."

			if (possibleRewards === "money") key += "money"

			if (possibleRewards === "stones") key += "stones"

			if (possibleRewards === "item") key += "item"

			const customMessage = i18n_random({ ns: "messages", key })

			dispatch(addMessage(t("changeLucky.price", { customMessage })))

			return undefined
		}

		if (event === EVENT.getKarma) {
			const money = Math.floor(Math.random() * 17) + 10

			setCustomCallback(() => () => {
				if (playerMoney < money)
					return dispatch(addMessage(t("shop.not enough money")))
				dispatch(updateKarma(0.2))
				dispatch(updateMoney(-money))
			})

			dispatch(
				addMessage(
					i18n_random({
						ns: "messages",
						key: "getKarma",
						interpolations: { money },
					})
				)
			)
			return undefined
		}
		if (event === EVENT.getLucky) {
			const money = Math.floor(Math.random() * 11) + 10

			setCustomCallback(() => () => {
				if (playerMoney < money)
					return dispatch(addMessage(t("shop.not enough money")))
				dispatch(updateLucky(1))
				dispatch(updateMoney(-money))
			})

			dispatch(
				addMessage(
					i18n_random({
						ns: "messages",
						key: "getLucky",
						interpolations: { money },
					})
				)
			)
			return undefined
		}
		if (event === EVENT.shop) {
			dispatch(setSection(SECTIONS.shop))
			dispatch(createRandomShopItems({ trullyKarma }))

			return undefined
		}

		if (event === EVENT.fighting) dispatch(setSection(SECTIONS.fighting))

		const wasInFight =
			event === EVENT.walking &&
			(section === SECTIONS.fighting || section === SECTIONS.seeSwords)

		if (wasInFight) dispatch(setSection(SECTIONS.userStats))

		if (event !== EVENT.walking) return undefined
		dispatch(cleanChat())
		dispatch(cleanItemInfo())
		dispatch(addEventNum())
		setTimeout(() => dispatch(setRandomEvent()), getWalkTime())
	}, [event])

	return { walk, fight, buyItem, simpleEventCallback }
}

export default useEvent
