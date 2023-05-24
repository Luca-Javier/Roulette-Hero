import { useDispatch, useSelector } from "react-redux"
import useWheel from "@contexts/useWheel"
import { useEffect, useState } from "react"
import getForgedWeapon from "@functions/getForgedWeapon"
import { replaceItem, updateStones } from "@reducers/playerReducer"
import useSections from "@hooks/useSections"
import getForgedArmor from "@functions/getForgedArmor"
import { useTranslation } from "react-i18next"
import { FORJE_ASCENDAT_QUALITY, FORJE_PRICE } from "@constants/forjeItems"
import { GET_FORJE_WHEEL } from "@constants/wheelTemplates"
import { GET_LUCKY_FORJE_WHEEL } from "@constants/wheelTemplates"

const effects = () => {
	const {
		stones,
		stats: { trullyKarma },
	} = useSelector(state => state.player)
	const item = useSelector(state => state.event.itemInfo)
	const { handleSpin, configWheel, spin } = useWheel()
	const dispatch = useDispatch()
	const { setSection, sections } = useSections()
	const { t } = useTranslation("buttons")

	const [price, setPrice] = useState()

	const canForje =
		stones >= FORJE_PRICE[item.quality] && item.quality !== "legendary" && !spin
	const canLuckyForje =
		stones >= 1 &&
		item.quality !== "common" &&
		item.quality !== "legendary" &&
		!spin

	const forje = async () => {
		configWheel(GET_FORJE_WHEEL(item.quality))
		setPrice(FORJE_PRICE[item.quality])
	}

	const luckyForje = async () => {
		configWheel(GET_LUCKY_FORJE_WHEEL(item.quality))
		setPrice(1)
	}

	const saveForjeItem = ({ downgrade }) => {
		const forjedItem =
			item.equipType === "weapon"
				? getForgedWeapon({ item, trullyKarma, downgrade })
				: getForgedArmor({ item, trullyKarma, downgrade })

		dispatch(replaceItem({ newItem: forjedItem }))

		setSection(sections.userStats)
	}

	useEffect(() => {
		if (!price) return
		;(async () => {
			const res = await handleSpin()

			dispatch(updateStones(-price))
			setPrice(null)

			if (res === "fail") return

			if (res === "downgrade") saveForjeItem({ downgrade: true })
			else saveForjeItem({ downgrade: false })
		})()
	}, [price])

	return { t, canForje, forje, luckyForje, canLuckyForje }
}

export default effects
