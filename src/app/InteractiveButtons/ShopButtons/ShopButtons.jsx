import React from "react"
import Button from "@components/Button"
import ItemImage from "@components/ItemImage"
import LuckyButtons from "@components/LuckyButtons"
import effects from "./effects"

function ShopButtons() {
	const {
		isBuying,
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
			{!isBuying ? (
				<>
					<Button text={t("walk")} onClick={walk} />
					<Button text={t("buy")} onClick={sectionBuy} />
					<LuckyButtons text={t("seduce")} onClick={seduce} />
				</>
			) : (
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
