import React from "react"
import { useSelector } from "react-redux"
import Button from "@components/Button"
import { EVENT } from "@constants/events"
import FightingButton from "./FightButtons"
import useEvent from "@hooks/useEvent"
import ShopButtons from "./ShopButtons"
import ItemInfoButtons from "./ItemInfoButtons"
import ForjeButtons from "./ForjeButtons"
import { useTranslation } from "react-i18next"
import { SECTIONS } from "@constants/sections"
import SelectingSideButtons from "./SelectingSideButtons"

function InteractiveButtons() {
	const { event, section } = useSelector(state => state.event)
	const { walk, fight } = useEvent()
	const { t } = useTranslation("buttons")

	if (section === SECTIONS.seeSwords) return

	if (section === SECTIONS.itemInfo)
		return <ItemInfoButtons sell={event === EVENT.shop} />

	if (section === SECTIONS.forje) return <ForjeButtons />

	if (section === SECTIONS.selectingItem) return <SelectingSideButtons />

	return (
		<section className="interactive-buttons">
			{event === EVENT.waiting && <Button text={t("walk")} onClick={walk} />}
			{event === EVENT.walking && (
				<Button className="walking-animation" text={t("walking")} disabled />
			)}
			{event === EVENT.fight && <Button text={t("fight")} onClick={fight} />}
			{event === EVENT.backFight && (
				<>
					{/* //todo must be attack and reduce the enemy health or maybe just a lucky shoot or fight  */}

					<Button text={t("fight")} onClick={fight} />
					<Button text={t("walk")} onClick={walk} />
				</>
			)}

			{event === EVENT.fighting && <FightingButton />}
			{event === EVENT.chest && <SimpleEventButtons text={t("open chest")} />}

			{event === EVENT.changeKarma && <SimpleEventButtons text={t("take")} />}

			{event === EVENT.changeLucky && <SimpleEventButtons text={t("take")} />}

			{event === EVENT.getKarma && <SimpleEventButtons text={t("give")} />}

			{event === EVENT.getLucky && <SimpleEventButtons text={t("give")} />}

			{event === EVENT.shop && <ShopButtons />}
		</section>
	)
}

export default InteractiveButtons

function SimpleEventButtons({ text }) {
	const { walk, simpleEventCallback } = useEvent()

	return (
		<>
			<Button text={text} onClick={simpleEventCallback} />
			<Button text={t("walk")} onClick={walk} />
		</>
	)
}
