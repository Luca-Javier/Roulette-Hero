import { useSelector } from "react-redux"
import ItemImage from "@components/ItemImage"
import { useTranslation } from "react-i18next"

function SelectingItem() {
	const item = useSelector(state => state.event.itemInfo)
	const { t } = useTranslation("pages", { keyPrefix: "playing" })
	const { leftHand, rightHand, leftFoot, rightFoot } = useSelector(
		state => state.player.equipment
	)

	return (
		<article className="select-side">
			<p>{t("select side question")}</p>
			<div className="flex space-around w-100">
				{item.equipType === "weapon" ? (
					<>
						<ItemImage className="rotate" item={leftHand} />
						<ItemImage item={rightHand} />
					</>
				) : (
					<>
						<ItemImage className="rotate" item={leftFoot} />
						<ItemImage item={rightFoot} />
					</>
				)}
			</div>
		</article>
	)
}

export default SelectingItem
