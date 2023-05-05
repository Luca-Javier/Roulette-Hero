import { useSelector } from "react-redux"
import ItemImage from "../../ItemImage"
import sellerImage from "@assets/npcs/seller.png"

function Shop({}) {
	const { shopItems } = useSelector(state => state.event)

	return (
		<section className="flex flex-column between h-100">
			<article className="txt-center h-50">
				<img style={{ height: "100%" }} src={sellerImage} alt="Seller" />
			</article>
			<article className="shop-items p-1">
				{shopItems.map(item => (
					<div key={item.id}>
						<ItemImage item={item} width={50} />
						<strong>{item.price * 2}</strong>
					</div>
				))}
			</article>
		</section>
	)
}

export default Shop
