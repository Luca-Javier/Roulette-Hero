import React, { useEffect } from "react"
import { useState } from "react"
import UserStats from "./sections/UserStats"
import Backpag from "./sections/Backpag"
import SectionsButtons from "./SectionsButtons"
import Fightin from "./displayEvents/Fightin"
import { useDispatch, useSelector } from "react-redux"
import SeeSwords from "./sections/seeSwords"
import { EVENT } from "@config/eventsTypes"
import {
	addEventNum,
	addMessage,
	cleanChat,
	cleanItemInfo,
	setRandomEvent,
} from "@reducers/eventReducer"
import { getWalkTime } from "@helpers/getWalkingTime"
import ItemInfo from "./sections/ItemInfo"

/**
 *  Enum of sections for know the current section
 *
 * @typedef {object} Sections
 *
 * @property {number} userStats
 * @property {number} backpack
 * @property {number} fighting
 * @property {number} seeSwords
 * @property {number} itemInfo
 */

/**@type {Sections} */
const sections = {
	userStats: 0,
	backpack: 1,
	fighting: 2,
	seeSwords: 3,
	itemInfo: 4,
}

function MainInteractiveUI() {
	//Imports
	const { event } = useSelector(state => state.event)
	const dispatch = useDispatch()

	//States
	const [section, setSection] = useState(sections.userStats)

	//Events
	const resetSections = () => setSection(sections.userStats)

	//Effects
	useEffect(() => {
		if (event === EVENT.chest) {
			dispatch(addMessage("You found a chest"))
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

	return (
		<section className="main-interactive-ui">
			<article className="interactive-per-section">
				{section === sections.userStats && <UserStats />}
				{section === sections.backpack && (
					<Backpag setSection={setSection} sections={sections} />
				)}
				{section === sections.fighting && <Fightin />}
				{section === sections.seeSwords && <SeeSwords />}
				{section === sections.itemInfo && (
					<ItemInfo forje={true} resetSections={resetSections} />
				)}
			</article>
			<SectionsButtons
				section={section}
				setSection={setSection}
				sections={sections}
			/>
		</section>
	)
}

export default MainInteractiveUI
