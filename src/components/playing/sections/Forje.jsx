import { useSelector } from "react-redux"
import ItemImage from "../../ItemImage"
import forjeIcon from "@assets/icons/sections/forje.svg"
import MyWheel from "../../MyWheel"

function Forje({}) {
	const item = useSelector(state => state.event.itemInfo)

	const ascendantQualitys = {
		common: "rare",
		rare: "epic",
		epic: "legendary",
	}

	const upgradeQuality = {
		common: 6,
		rare: 11,
		epic: 17,
	}

	const newQuality = ascendantQualitys[item.quality]

	return (
		<section
			className="flex flex-column between w-100 h-100 p-1"
			style={{ position: "relative" }}>
			<div className="flex space-around my-1">
				<ItemImage item={item} width={70} />
				<p className="flex align-center">➡️</p>
				<ItemImage item={{ ...item, quality: newQuality }} width={70} />
			</div>
			<article className="fight-wheel-container">
				<MyWheel />
			</article>
			<div className="flex flex-column align-center">
				<img src={forjeIcon} alt="Forje icon section" style={{ width: 50 }} />
				<p className="stone">{upgradeQuality[item.quality]}</p>
			</div>
		</section>
	)
}

export default Forje
