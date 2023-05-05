import React from "react"
import equipIcon from "@assets/icons/sections/equipment.svg"
import backpackIcon from "@assets/icons/sections/backpack.svg"
import swordsIcon from "@assets/icons/sections/swords-section.svg"
import loupeIcon from "@assets/icons/sections/loupe-info.svg"
import shopIcon from "@assets/icons/sections/shop.svg"
import useSections from "@hooks/useSections"
import { EVENT } from "@config/eventsTypes"
import { useSelector } from "react-redux"

function SectionsButtons() {
	const { section, setSection, sections } = useSections()
	const { event } = useSelector(state => state.event)

	//todo crear un componente para icons

	return (
		<article className="interactive-sections">
			<button
				className={section === sections.userStats ? "isActive" : ""}
				onClick={() => setSection(sections.userStats)}
				disabled={section === sections.fighting}>
				<img
					style={{ width: "17px" }}
					src={equipIcon}
					alt="Equipment icon section"
				/>
			</button>
			<button
				className={section === sections.backpack ? "isActive" : ""}
				onClick={() => setSection(sections.backpack)}
				disabled={section === sections.fighting}>
				<img
					style={{ width: "15px" }}
					src={backpackIcon}
					alt="Backpack icon section"
				/>
			</button>
			<button className={section === sections.itemInfo ? "isActive" : "none"}>
				<img
					style={{ width: "15px" }}
					src={loupeIcon}
					alt="item info icon section"
				/>
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
						<img
							style={{ width: "17px" }}
							src={swordsIcon}
							alt="Section swords stats"
						/>
					</button>
				</>
			)}

			{event === EVENT.shop && (
				<button
					className={section === sections.shop ? "isActive" : ""}
					onClick={() => setSection(sections.shop)}>
					<img
						style={{ width: "15px" }}
						src={shopIcon}
						alt="Shop icon section"
					/>
				</button>
			)}
		</article>
	)
}

export default SectionsButtons
