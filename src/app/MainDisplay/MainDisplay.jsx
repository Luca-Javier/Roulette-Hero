import React from "react"
import UserStats from "./sections/UserStats"
import Backpag from "./sections/Backpag"
import SectionsButtons from "./SectionsButtons"
import Fightin from "./sections/Fighting"
import SeeSwords from "./sections/SeeSwords"
import ItemInfo from "./sections/ItemInfo"
import Shop from "./sections/Shop"
import SelectingItem from "./sections/SelectingItem"
import Forje from "./sections/Forje"
import { useSelector } from "react-redux"
import { SECTIONS } from "@constants/sections"

function MainDisplay() {
	const { section } = useSelector(state => state.event)

	return (
		<section className="main-interactive-ui">
			<article className="interactive-per-section">
				{section === SECTIONS.userStats && <UserStats />}
				{section === SECTIONS.backpack && <Backpag />}
				{section === SECTIONS.fighting && <Fightin />}
				{section === SECTIONS.seeSwords && <SeeSwords />}
				{section === SECTIONS.itemInfo && <ItemInfo />}
				{section === SECTIONS.selectingItem && <SelectingItem />}
				{section === SECTIONS.shop && <Shop />}
				{section === SECTIONS.forje && <Forje />}
			</article>
			<SectionsButtons />
		</section>
	)
}

export default MainDisplay
