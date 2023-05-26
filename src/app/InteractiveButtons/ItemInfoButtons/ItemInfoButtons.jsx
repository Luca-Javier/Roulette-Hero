import { useDispatch, useSelector } from "react-redux"
import useEquip from "@hooks/useEquip"
import Button from "@components/Button"
import { useTranslation } from "react-i18next"
import { QUALITY_ITEMS } from "@constants/items"
import { removeItem, updateMoney } from "@reducers/playerReducer"
import { SECTIONS } from "@constants/sections"
import { setSection } from "@reducers/eventReducer"

function ItemInfoButtons({ sell }) {
	const dispatch = useDispatch()
	const { equipment } = useSelector(state => state.player)
	const item = useSelector(state => state.event.itemInfo)
	const { equip } = useEquip({ item })
	const { t } = useTranslation("buttons")

	const isEquiped = Object.values(equipment).some(
		equipedItem => equipedItem?.id === item.id
	)

	const isLegendary = item.quality === QUALITY_ITEMS.legendary

	const isUniqueWeapon =
		(equipment.leftHand?.id === item.id && !equipment.rightHand) ||
		(equipment.rightHand?.id === item.id && !equipment.leftHand)

	const sellItem = () => {
		dispatch(removeItem({ id: item.id }))
		dispatch(updateMoney(item.price))
		dispatch(setSection(SECTIONS.userStats))
	}

	return (
		<section className="interactive-buttons">
			{!isEquiped && <Button text={t("equip")} onClick={equip} />}
			{!isLegendary && (
				<Button
					text={t("forje")}
					onClick={() => dispatch(setSection(SECTIONS.forje))}
				/>
			)}
			{sell && !isUniqueWeapon && (
				<Button text={t("sell")} onClick={sellItem} />
			)}
		</section>
	)
}

export default ItemInfoButtons
