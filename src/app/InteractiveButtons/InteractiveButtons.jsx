import React from "react"
import { useSelector } from "react-redux"
import Button from "@components/Button"
import { EVENT } from "@constants/events"
import FightingButton from "./FightButtons"
import useEvent from "@hooks/useEvent"
import ShopButtons from "./ShopButtons"
import useSections from "@hooks/useSections"
import ItemInfoButtons from "./ItemInfoButtons"
import ForjeButtons from "./ForjeButtons"
import { useTranslation } from "react-i18next"

function InteractiveButtons() {
	const { event } = useSelector(state => state.event)
	const { walk, fight, simpleEventCallback } = useEvent()
	const { section, sections } = useSections()
	const { t } = useTranslation("buttons")

	if (section === sections.seeSwords) return

	if (section === sections.itemInfo)
		return <ItemInfoButtons sell={event === EVENT.shop} />

	if (section === sections.forje) return <ForjeButtons />

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
			{event === EVENT.chest && (
				<Button text={t("open chest")} onClick={simpleEventCallback} />
			)}

			{/* //todo Componente de simple envets o un componente con el boton walk y los que les pasemos como children */}

			{event === EVENT.changeKarma && (
				<>
					<Button text={t("take")} onClick={simpleEventCallback} />
					<Button text={t("walk")} onClick={walk} />
				</>
			)}

			{event === EVENT.changeLucky && (
				<>
					<Button text={t("take")} onClick={simpleEventCallback} />
					<Button text={t("walk")} onClick={walk} />
				</>
			)}

			{event === EVENT.getKarma && (
				<>
					<Button text={t("give")} onClick={simpleEventCallback} />
					<Button text={t("walk")} onClick={walk} />
				</>
			)}

			{event === EVENT.getLucky && (
				<>
					<Button text={t("take")} onClick={simpleEventCallback} />
					<Button text={t("walk")} onClick={walk} />
				</>
			)}

			{event === EVENT.shop && <ShopButtons />}
		</section>
	)
}

export default InteractiveButtons
