import React, { useEffect, useState } from "react"
import Button from "./Button"
import useEvent from "../hooks/useEvent"
import { useDispatch, useSelector } from "react-redux"
import ItemImage from "./ItemImage"
import LuckyButtons from "./LuckyButtons"
import useWheel from "../context/useWheel"
import { WHEEL_SEDUCE_SHOP } from "../config/wheelTemplates"
import { addMessage, updateShopItems } from "../reducers/eventReducer"

function ShopButtons() {
	const [shopSection, setShopSection] = useState("initial")
	const dispatch = useDispatch()
	const { walk, buyItem } = useEvent()
	const { shopItems } = useSelector(state => state.event)
	const { handleSpin, configWheel } = useWheel()

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
				? "The seller is <b class='color-lucky'>happy</b>"
				: "You complimented the seller for his hair, <b class='color-wrong'>he is bald</b>"

		dispatch(addMessage(message))
	}

	return (
		<>
			{shopSection === "initial" && (
				<>
					<Button text="Walk" onClick={walk} />
					<Button text="Buy" onClick={sectionBuy} />
					<LuckyButtons text="Seduce" onClick={seduce} />
				</>
			)}
			{shopSection === "buy" && (
				<>
					<Button text="⬅️" onClick={resetSection} />
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
