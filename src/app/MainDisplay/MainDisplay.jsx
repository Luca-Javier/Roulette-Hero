import React from "react"
import UserStats from "./sections/UserStats"
import Backpag from "./sections/Backpag"
import SectionsButtons from "./SectionsButtons"
import Fightin from "./sections/Fighting"
import SeeSwords from "./sections/SeeSwords"
import ItemInfo from "./sections/ItemInfo"
import useSections from "@hooks/useSections"
import Shop from "./sections/Shop"
import SelectingItem from "./sections/SelectingItem"
import Forje from "./sections/Forje"

/**@typedef {import("../../types").Sections} Sections */

function MainDisplay() {
	/**@type {{section:number,sections:Sections}} */
	const { section, sections } = useSections()

	return (
		<section className="main-interactive-ui">
			<article className="interactive-per-section">
				{section === sections.userStats && <UserStats />}
				{section === sections.backpack && <Backpag />}
				{section === sections.fighting && <Fightin />}
				{section === sections.seeSwords && <SeeSwords />}
				{section === sections.itemInfo && <ItemInfo />}
				{section === sections.selectingItem && <SelectingItem />}
				{section === sections.shop && <Shop />}
				{section === sections.forje && <Forje />}
			</article>
			<SectionsButtons section={section} sections={sections} />
		</section>
	)
}

export default MainDisplay
