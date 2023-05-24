import { useSelector } from "react-redux"
import useEquip from "@hooks/useEquip"
import ItemImage from "@components/ItemImage"
import Button from "@components/Button"
import useSections from "@hooks/useSections"

function SelectingItem() {
	const item = useSelector(state => state.event.itemInfo)
	const { equipOnSide, equipment } = useEquip({ item })
	const { setSection, sections } = useSections()

	const { leftHand, rightHand, leftFoot, rightFoot } = equipment

	return (
		<article className="select-side">
			<p>Which one want to replace?</p>
			<div className="flex space-around w-100">
				{item.equipType === "weapon" ? (
					<>
						<ItemImage
							className="rotate"
							onClick={() => equipOnSide("leftHand")}
							item={leftHand}
						/>
						<ItemImage
							onClick={() => equipOnSide("rightHand")}
							item={rightHand}
						/>
					</>
				) : (
					<>
						<ItemImage
							className="rotate"
							onClick={() => equipOnSide("leftFoot")}
							item={leftFoot}
						/>
						<ItemImage
							onClick={() => equipOnSide("rightFoot")}
							item={rightFoot}
						/>
					</>
				)}
			</div>
			<div className="flex justify-center w-100">
				<Button text="<-" onClick={() => setSection(sections.itemInfo)} />
			</div>
		</article>
	)
}

export default SelectingItem
