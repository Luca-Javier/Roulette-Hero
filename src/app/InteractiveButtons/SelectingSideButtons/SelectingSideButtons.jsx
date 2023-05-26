import { useDispatch, useSelector } from "react-redux"
import Button from "@components/Button"
import { setSection } from "@reducers/eventReducer"
import { SECTIONS } from "@constants/sections"
import useEquip from "@hooks/useEquip"
import ItemImage from "@components/ItemImage"

function SelectingSideButtons() {
	const dispatch = useDispatch()
	const { equipType } = useSelector(state => state.event.itemInfo)

	return (
		<section className="interactive-buttons">
			<Button
				text={"⬅"}
				onClick={() => dispatch(setSection(SECTIONS.itemInfo))}
			/>
			{equipType === "weapon" ? (
				<SelectButtons leftKey="leftHand" rightKey="rightHand" />
			) : (
				<SelectButtons leftKey="leftFoot" rightKey="rightFoot" />
			)}
		</section>
	)
}

export default SelectingSideButtons

function SelectButtons({ leftKey, rightKey }) {
	const item = useSelector(state => state.event.itemInfo)
	const { equipOnSide, equipment } = useEquip({ item })

	return (
		<>
			<Button className={"rotate"} onClick={() => equipOnSide(leftKey)}>
				<ItemImage width={20} item={equipment[leftKey]} />
			</Button>
			<Button onClick={() => equipOnSide(rightKey)}>
				<ItemImage width={20} item={equipment[rightKey]} />
			</Button>
		</>
	)
}
