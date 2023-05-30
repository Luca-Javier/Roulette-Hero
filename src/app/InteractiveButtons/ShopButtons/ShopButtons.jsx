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
		spin,
	} = effects()

	return (
		<>
			{!isBuying ? (
				<>
					<Button text={t("walk")} onClick={walk} disabled={spin} />
					<Button text={t("buy")} onClick={sectionBuy} disabled={spin} />
					<LuckyButtons text={t("seduce")} onClick={seduce} disabled={spin} />
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
