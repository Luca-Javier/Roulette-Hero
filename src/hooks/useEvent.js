import { useEffect, useRef } from "react"
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
} from "../reducers/eventReducer"
import { addBackpag, updateMoney } from "../reducers/playerReducer"

function useEvent() {
	//Imports
	const { event } = useSelector(state => state.event)
	const { money, stats } = useSelector(state => state.player)
	const { trullyKarma } = stats
	const dispatch = useDispatch()
	const { section, sections, setSection } = useSections()
	const { getReward } = useReward()
	//const lastEvent = useRef()

	//Custom Events
	const openChest = () => {
		getReward()
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
		/* if (lastEvent.current === event) return undefined
		lastEvent.current = event */

		if (event === EVENT.chest) {
			dispatch(addMessage("You found a chest"))
			return undefined
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

	return { walk, fight, openChest, buyItem }
}

export default useEvent
