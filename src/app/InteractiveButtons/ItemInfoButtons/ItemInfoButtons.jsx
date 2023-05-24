import { useDispatch, useSelector } from "react-redux"
import useEquip from "@hooks/useEquip"
import useSections from "@hooks/useSections"
import Button from "@components/Button"
import { useTranslation } from "react-i18next"
import { QUALITY_ITEMS } from "@constants/items"
import { removeItem, updateMoney } from "@reducers/playerReducer"

function ItemInfoButtons({ sell }) {
	const dispatch = useDispatch()
	const { setSection, sections } = useSections()
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
		setSection(sections.userStats)
	}

	return (
		<section className="interactive-buttons">
			{!isEquiped && <Button text={t("equip")} onClick={equip} />}
			{!isLegendary && (
				<Button text={t("forje")} onClick={() => setSection(sections.forje)} />
			)}
			{sell && !isUniqueWeapon && (
				<Button text={t("sell")} onClick={sellItem} />
			)}
		</section>
	)
}

export default ItemInfoButtons
