import { useSelector } from "react-redux"
import ItemImage from "@components/ItemImage"
import forjeIcon from "@assets/icons/sections/forje.svg"
import MyWheel from "@components/MyWheel"
import { FORJE_ASCENDAT_QUALITY, FORJE_PRICE } from "@constants/forjeItems"

function Forje({}) {
	const item = useSelector(state => state.event.itemInfo)

	const newQuality = FORJE_ASCENDAT_QUALITY[item.quality]

	return (
		<section
			className="flex flex-column between w-100 h-100 p-1"
			style={{ position: "relative" }}>
			<div className="flex space-around my-1">
				<ItemImage item={item} width={70} />
				<p className="flex align-center">➡</p>
				<ItemImage item={{ ...item, quality: newQuality }} width={70} />
			</div>
			<article className="fight-wheel-container">
				<MyWheel />
			</article>
			<div className="flex flex-column align-center">
				<img src={forjeIcon} alt="Forje icon section" style={{ width: 50 }} />
				<p className="stone">{FORJE_PRICE[item.quality]}</p>
			</div>
		</section>
	)
}

export default Forje
