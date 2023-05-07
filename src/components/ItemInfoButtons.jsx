import { useSelector } from "react-redux"
import useEquip from "../hooks/useEquip"
import useSections from "../hooks/useSections"
import Button from "./Button"

function ItemInfoButtons({ sell }) {
	const { setSection, sections } = useSections()
	const item = useSelector(state => state.event.itemInfo)
	const { equip } = useEquip({ item })

	return (
		<section className="interactive-buttons">
			<Button text="Equip" onClick={equip} />
			<Button text="Forje" onClick={() => setSection(sections.forje)} />
			{sell && <Button text="Sell" />}
		</section>
	)
}

export default ItemInfoButtons
