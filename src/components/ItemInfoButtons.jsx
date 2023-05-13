import { useSelector } from "react-redux"
import useEquip from "../hooks/useEquip"
import useSections from "../hooks/useSections"
import Button from "./Button"

function ItemInfoButtons({ sell }) {
	const { setSection, sections } = useSections()
	const { equipment } = useSelector(state => state.player)
	const item = useSelector(state => state.event.itemInfo)
	const { equip } = useEquip({ item })

	const isEquiped = equipment[item.equipKey || item.type]?.id === item.id

	return (
		<section className="interactive-buttons">
			{!isEquiped && <Button text="Equip" onClick={equip} />}
			<Button text="Forje" onClick={() => setSection(sections.forje)} />
			{sell && <Button text="Sell" />}
		</section>
	)
}

export default ItemInfoButtons
