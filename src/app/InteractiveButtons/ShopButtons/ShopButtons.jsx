import React from "react"
import Button from "../../../shared/components/Button"
import ItemImage from "../../../shared/components/ItemImage"
import LuckyButtons from "../../../shared/components/LuckyButtons"
import effects from "./effects"

function ShopButtons() {
	const {
		shopSection,
		t,
		walk,
		sectionBuy,
		seduce,
		resetSection,
		shopItems,
		buyItem,
	} = effects()

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
