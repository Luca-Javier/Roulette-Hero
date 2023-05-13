import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EVENT } from "@config/eventsTypes"
import {
	addEventNum,
	addMessage,
	cleanChat,
	cleanItemInfo,
	setRandomEvent,
} from "@reducers/eventReducer"
import { getWalkTime } from "@helpers/getWalkingTime"
import useSections from "./useSections"
import { setEvent } from "@reducers/eventReducer"
import useReward from "./useReward"
import {
	createRandomShopItems,
	removePuchasedItem,
} from "@reducers/eventReducer"
import { addBackpag, updateMoney } from "@reducers/playerReducer"
import { setLastEvent } from "../reducers/eventReducer"
import { updateKarma } from "../reducers/playerReducer"

function useEvent() {
	//Imports
	const { event, lastEvent } = useSelector(state => state.event)
	const { money, stats } = useSelector(state => state.player)
	const { trullyKarma } = stats
	const dispatch = useDispatch()
	const { section, sections, setSection } = useSections()
	const { getReward } = useReward()

	const [customCallback, setCustomCallback] = useState()

	//Custom Events
	const simpleEventCallback = () => {
		customCallback()
		dispatch(setEvent(EVENT.waiting))
	}

	const walk = () => dispatch(setEvent(EVENT.walking))

	const fight = () => dispatch(setEvent(EVENT.fighting))

	const buyItem = item => {
		if (money < item.price)
			return dispatch(addMessage("You don't have enough money"))

		dispatch(removePuchasedItem({ item }))

		dispatch(addBackpag({ item }))
		dispatch(updateMoney(-item.price * 2))
	}

	useEffect(() => {
		if (lastEvent === event) return undefined
		dispatch(setLastEvent(event))

		if (event === EVENT.chest) {
			dispatch(addMessage("You found a chest"))

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
				dispatch(updateKarma(-0.2))
			})

			let customMessage

			if (possibleRewards === "money")
				customMessage = "You found some money below a ladder"

			if (possibleRewards === "stones")
				customMessage = "You found some stones below a ladder"

			if (possibleRewards === "item")
				customMessage =
					"You found a <b class='color-good'>item</b> below a ladder"

			dispatch(
				addMessage(`${customMessage} <b class="color-wrong">(-0.2 karma)</b>`)
			)

			return undefined
		}

		if (event === EVENT.getKarma) {
			const money = Math.floor(Math.random() * 33) + 10

			setCustomCallback(() => () => {
				dispatch(updateKarma(0.2))
				dispatch(updateMoney(-money))
			})

			dispatch(
				addMessage(
					`You found a homeless. Would you give him <b class='money'>${money}</b> ? <b class='color-good'>(+ 0.2 karma)</b>`
				)
			)
		}
		if (event === EVENT.shop) {
			setSection(sections.shop)
			dispatch(createRandomShopItems({ trullyKarma }))

			return undefined
		}

		if (event === EVENT.fighting) setSection(sections.fighting)

		const wasInFight =
			event === EVENT.walking &&
			(section === sections.fighting || section === sections.seeSwords)

		if (wasInFight) setSection(sections.userStats)

		if (event !== EVENT.walking) return undefined
		dispatch(cleanChat())
		dispatch(cleanItemInfo())
		dispatch(addEventNum())
		setTimeout(() => dispatch(setRandomEvent()), getWalkTime())
	}, [event])

	return { walk, fight, buyItem, simpleEventCallback }
}

export default useEvent
