import { useEffect, useState } from "react"
import useEvent from "@hooks/useEvent"
import { useDispatch, useSelector } from "react-redux"
import useWheel from "@contexts/useWheel"
import { WHEEL_SEDUCE_SHOP } from "@constants/wheelTemplates"
import { addMessage, updateShopItems } from "@reducers/eventReducer"
import { useTranslation } from "react-i18next"
import { i18n_random } from "@functions/translators"

const effects = () => {
	const [shopSection, setShopSection] = useState("initial")
	const dispatch = useDispatch()
	const { walk, buyItem } = useEvent()
	const { shopItems } = useSelector(state => state.event)
	const { handleSpin, configWheel } = useWheel()
	const { t } = useTranslation("buttons")

	useEffect(() => {
		configWheel(WHEEL_SEDUCE_SHOP)
	}, [])

	const resetSection = () => setShopSection("initial")

	const sectionBuy = () => setShopSection("buy")

	const seduce = async () => {
		const res = await handleSpin()

		console.log({ res })

		if (res === "normal") return

		const newShowItems = shopItems.map(item => {
			const newPrice = res === "seduce" ? item.price * 0.8 : item.price * 1.2

			return { ...item, price: Math.round(newPrice) }
		})

		dispatch(updateShopItems({ items: newShowItems }))

		const message =
			res === "seduce"
				? i18n_random({ ns: "messages", key: "shop.seduce" })
				: i18n_random({ ns: "messages", key: "shop.seduce fail" })

		dispatch(addMessage(message))
	}

	return {
		shopSection,
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
