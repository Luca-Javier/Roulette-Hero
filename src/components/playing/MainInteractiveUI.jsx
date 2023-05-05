import React from "react"
import UserStats from "./sections/UserStats"
import Backpag from "./sections/Backpag"
import SectionsButtons from "./SectionsButtons"
import Fightin from "./displayEvents/Fightin"
import SeeSwords from "./sections/SeeSwords"
import ItemInfo from "./sections/ItemInfo"
import useEvent from "../../hooks/useEvent"
import useSections from "../../hooks/useSections"
import { useSelector } from "react-redux"
import Shop from "./sections/Shop"

function MainInteractiveUI() {
	//Imports
	const { section, sections } = useSections()

	return (
		<section className="main-interactive-ui">
			<article className="interactive-per-section">
				{section === sections.userStats && <UserStats />}
				{section === sections.backpack && <Backpag />}
				{section === sections.fighting && <Fightin />}
				{section === sections.seeSwords && <SeeSwords />}
				{section === sections.itemInfo && <ItemInfo forje={true} />}
				{section === sections.shop && <Shop />}
			</article>
			<SectionsButtons section={section} sections={sections} />
		</section>
	)
}

export default MainInteractiveUI
