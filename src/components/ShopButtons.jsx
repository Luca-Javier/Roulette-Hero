import React, { useState } from "react"
import Button from "./Button"
import useEvent from "../hooks/useEvent"
import { useSelector } from "react-redux"
import ItemImage from "./ItemImage"
import LuckyButtons from "./LuckyButtons"

function ShopButtons() {
	const [shopSection, setShopSection] = useState("initial")
	const { walk, buyItem } = useEvent()
	const { shopItems } = useSelector(state => state.event)

	const resetSection = () => setShopSection("initial")

	const sectionBuy = () => setShopSection("buy")

	return (
		<>
			{shopSection === "initial" && (
				<>
					<Button text="Walk" onClick={walk} />
					<Button text="Buy" onClick={sectionBuy} />
					<LuckyButtons text="Seduce" />
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
