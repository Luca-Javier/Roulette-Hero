import React, { useEffect, useState } from "react"
import Button from "./Button"
import useEvent from "../hooks/useEvent"
import { useDispatch, useSelector } from "react-redux"
import ItemImage from "./ItemImage"
import LuckyButtons from "./LuckyButtons"
import useWheel from "../context/useWheel"
import { WHEEL_SEDUCE_SHOP } from "../config/wheelTemplates"
import { addMessage, updateShopItems } from "../reducers/eventReducer"
import { useTranslation } from "react-i18next"
import { i18n_random } from "../shared/translates/translators"

function ShopButtons() {
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
		console.log("hola")

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

	return (
		<>
			{shopSection === "initial" && (
				<>
					<Button text={t("walk")} onClick={walk} />
					<Button text={t("buy")} onClick={sectionBuy} />
					<LuckyButtons text={t("seduce")} onClick={seduce} />
				</>
			)}
			{shopSection === "buy" && (
				<>
					<Button text="⬅" onClick={resetSection} />
					{shopItems.map(item => (
						<Button key={item.id} onClick={() => buyItem(item)}>
							<ItemImage width={20} item={item} />
						</Button>
					))}
				</>
			)}
		</>
	)
}

export default ShopButtons
