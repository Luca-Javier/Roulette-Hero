import React from "react"
import { EVENT } from "@constants/events"
import { useDispatch, useSelector } from "react-redux"
import {
	BackpackIcon,
	EquipIcon,
	ForjeIcon,
	LopueIcon,
	ShopIcon,
	SwordsIcon,
} from "@components/Icons"
import { SECTIONS } from "@constants/sections"
import { setSection } from "@reducers/eventReducer"

function SectionsButtons() {
	const { section, event } = useSelector(state => state.event)
	const { isAttacking } = useSelector(state => state.fight)

	return (
		<article className="interactive-sections">
			<SectionBtn section={SECTIONS.userStats} disabledInFight={true}>
				<EquipIcon />
			</SectionBtn>

			<SectionBtn section={SECTIONS.backpack} disabledInFight={true}>
				<BackpackIcon />
			</SectionBtn>

			{(section === SECTIONS.itemInfo ||
				section === SECTIONS.selectingItem) && (
				<button className="isActive">
					<LopueIcon />
				</button>
			)}

			{section === SECTIONS.forje && (
				<button className="isActive">
					<ForjeIcon />
				</button>
			)}

			{(section === SECTIONS.fighting || section === SECTIONS.seeSwords) && (
				<>
					<SectionBtn section={SECTIONS.fighting}>
						<b>VS</b>
					</SectionBtn>

					<SectionBtn section={SECTIONS.seeSwords} disabled={isAttacking}>
						<SwordsIcon />
					</SectionBtn>
				</>
			)}

			{event === EVENT.shop && (
				<SectionBtn section={SECTIONS.shop}>
					<ShopIcon />
				</SectionBtn>
			)}
		</article>
	)
}

export default SectionsButtons

function SectionBtn({ section, children, disabledInFight, ...args }) {
	const { section: s } = useSelector(state => state.event)
	const dispatch = useDispatch()

	return (
		<button
			className={s === section ? "isActive" : ""}
			onClick={() => dispatch(setSection(section))}
			disabled={
				disabledInFight
					? s === SECTIONS.fighting || s === SECTIONS.seeSwords
					: false
			}
			{...args}>
			{children}
		</button>
	)
}
