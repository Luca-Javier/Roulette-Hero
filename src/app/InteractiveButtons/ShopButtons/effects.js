import { useEffect, useState } from "react"
import useEvent from "@hooks/useEvent"
import { useDispatch, useSelector } from "react-redux"
import useWheel from "@contexts/useWheel"
import { WHEEL_SEDUCE_SHOP } from "@constants/wheelTemplates"
import {
	addMessage,
	updateShopItemsPrice,
	setSection,
} from "@reducers/eventReducer"
import { useTranslation } from "react-i18next"
import { i18n_random } from "@functions/translators"
import { SECTIONS } from "@constants/sections"

const effects = () => {
	const dispatch = useDispatch()
	const { walk, buyItem } = useEvent()
	const { shopItems } = useSelector(state => state.event)
	const { handleSpin, configWheel } = useWheel()
	const { t } = useTranslation("buttons")

	const [isBuying, setIsBuying] = useState(false)

	useEffect(() => {
		configWheel(WHEEL_SEDUCE_SHOP)
	}, [])

	const resetSection = () => setIsBuying(false)

	const sectionBuy = () => {
		setIsBuying(true)
		dispatch(setSection(SECTIONS.shop))
	}

	const seduce = async () => {
		const res = await handleSpin()

		if (res === "normal") return

		dispatch(updateShopItemsPrice({ isSeduced: res === "seduce" }))

		const message =
			res === "seduce"
				? i18n_random({ ns: "messages", key: "shop.seduce" })
				: i18n_random({ ns: "messages", key: "shop.seduce fail" })

		dispatch(addMessage(message))
	}

	return {
		isBuying,
		t,
		walk,
		sectionBuy,
		seduce,
		resetSection,
		shopItems,
		buyItem,
	}
}

export default effects
