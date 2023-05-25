import React from "react"
import useSections from "@hooks/useSections"
import { EVENT } from "@constants/events"
import { useSelector } from "react-redux"
import {
	BackpackIcon,
	EquipIcon,
	ForjeIcon,
	LopueIcon,
	ShopIcon,
	SwordsIcon,
} from "@components/Icons"

function SectionsButtons() {
	const { section, setSection, sections } = useSections()
	const { event } = useSelector(state => state.event)

	const disabledInFight =
		section === sections.fighting || section === sections.seeSwords

	return (
		<article className="interactive-sections">
			<button
				className={section === sections.userStats ? "isActive" : ""}
				onClick={() => setSection(sections.userStats)}
				disabled={disabledInFight}>
				<EquipIcon />
			</button>

			<button
				className={section === sections.backpack ? "isActive" : ""}
				onClick={() => setSection(sections.backpack)}
				disabled={disabledInFight}>
				<BackpackIcon />
			</button>

			<button className={section === sections.itemInfo ? "isActive" : "none"}>
				<LopueIcon />
			</button>

			<button className={section === sections.forje ? "isActive" : "none"}>
				<ForjeIcon />
			</button>

			{(section === sections.fighting || section === sections.seeSwords) && (
				<>
					<button
						className={section === sections.fighting ? "isActive" : ""}
						onClick={() => setSection(sections.fighting)}>
						<b>VS</b>
					</button>

					<button
						className={section === sections.seeSwords ? "isActive" : ""}
						onClick={() => setSection(sections.seeSwords)}>
						<SwordsIcon />
					</button>
				</>
			)}

			{event === EVENT.shop && (
				<button
					className={section === sections.shop ? "isActive" : ""}
					onClick={() => setSection(sections.shop)}>
					<ShopIcon />
				</button>
			)}
		</article>
	)
}

export default SectionsButtons