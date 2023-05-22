import { useSelector } from "react-redux"
import useEquip from "@hooks/useEquip"
import useSections from "@hooks/useSections"
import Button from "@components/Button"
import { useTranslation } from "react-i18next"

function ItemInfoButtons({ sell }) {
	const { setSection, sections } = useSections()
	const { equipment } = useSelector(state => state.player)
	const item = useSelector(state => state.event.itemInfo)
	const { equip } = useEquip({ item })
	const { t } = useTranslation("buttons")

	const isEquiped = equipment[item.equipKey || item.type]?.id === item.id

	return (
		<section className="interactive-buttons">
			{!isEquiped && <Button text={t("equip")} onClick={equip} />}
			<Button text={t("forje")} onClick={() => setSection(sections.forje)} />
			{sell && <Button text={t("sell")} />}
		</section>
	)
}

export default ItemInfoButtons
