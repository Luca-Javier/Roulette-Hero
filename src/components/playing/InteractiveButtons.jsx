import React from "react"
import { useSelector } from "react-redux"
import Button from "@components/Button"
import { EVENT } from "@config/eventsTypes"
import FightingButton from "./FightingButton"
import useEvent from "@hooks/useEvent"
import ShopButtons from "../ShopButtons"
import useSections from "@hooks/useSections"
import ItemInfoButtons from "../ItemInfoButtons"
import ForjeButtons from "../ForjeButtons"

function InteractiveButtons() {
	//Imports
	const { event } = useSelector(state => state.event)
	const { walk, fight, simpleEventCallback } = useEvent()
	const { section, sections } = useSections()

	if (section === sections.itemInfo)
		return <ItemInfoButtons sell={event === EVENT.shop} />

	if (section === sections.forje) return <ForjeButtons />

	return (
		<section className="interactive-buttons">
			{event === EVENT.waiting && <Button text="Walk" onClick={walk} />}
			{event === EVENT.walking && (
				<Button className="walking-animation" text="Walking" disabled />
			)}
			{event === EVENT.fight && <Button text="Fight" onClick={fight} />}
			{event === EVENT.backFight && (
				<>
					{/* //todo must be attack and reduce the enemy health or maybe just a lucky shoot or fight  */}

					<Button text="Fight" onClick={fight} />
					<Button text="Walk" onClick={walk} />
				</>
			)}

			{event === EVENT.fighting && <FightingButton />}
			{event === EVENT.chest && (
				<Button text="Open Chest" onClick={simpleEventCallback} />
			)}

			{/* //todo Componente de simple envets o un componente con el boton walk y los que les pasemos como children */}

			{event === EVENT.changeKarma && (
				<>
					<Button text="Take" onClick={simpleEventCallback} />
					<Button text="Walk" onClick={walk} />
				</>
			)}

			{event === EVENT.getKarma && (
				<>
					<Button text="Give" onClick={simpleEventCallback} />
					<Button text="Walk" onClick={walk} />
				</>
			)}

			{event === EVENT.shop && <ShopButtons />}
		</section>
	)
}

export default InteractiveButtons
