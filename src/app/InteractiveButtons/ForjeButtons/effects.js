import { useDispatch, useSelector } from "react-redux"

import useWheel from "@contexts/useWheel"
import { useEffect } from "react"
import getForjeConfigWheel from "@functions/getForjeConfigWheel"
import getForgedWeapon from "@functions/getFogedWeapon"
import { replaceItem, updateStones } from "@reducers/playerReducer"
import useSections from "@hooks/useSections"
import getForgedArmor from "@functions/getForgedArmor"
import { useTranslation } from "react-i18next"

const upgradePriceQuality = {
	common: 6,
	rare: 10,
	epic: 16,
}

const effects = () => {
	const {
		stones,
		stats: { trullyKarma },
	} = useSelector(state => state.player)
	const item = useSelector(state => state.event.itemInfo)
	const { handleSpin, configWheel } = useWheel()
	const dispatch = useDispatch()
	const { setSection, sections } = useSections()
	const { t } = useTranslation("buttons")

	const canForje = stones >= upgradePriceQuality[item.quality]

	useEffect(() => {
		configWheel(getForjeConfigWheel({ quality: item.quality }))
	}, [])

	const forje = async () => {
		const res = await handleSpin()

		dispatch(updateStones(-upgradePriceQuality[item.quality] / 2))

		if (res === "fail") return

		const upgradedItem =
			item.equipType === "weapon"
				? getForgedWeapon({ item, trullyKarma })
				: getForgedArmor({ item, trullyKarma })

		dispatch(replaceItem({ newItem: upgradedItem }))

		dispatch(updateStones(-upgradePriceQuality[item.quality] / 2))
		setSection(sections.userStats)
	}

	return { t, canForje, forje }
}

export default effects
