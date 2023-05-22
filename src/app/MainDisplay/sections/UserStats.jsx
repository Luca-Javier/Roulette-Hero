import React from "react"
import { useSelector } from "react-redux"
import emptyHeadImg from "@assets/armors/empty/head.svg"
import emptyHandImg from "@assets/armors/empty/hand.svg"
import emptyChestImg from "@assets/armors/empty/chest.svg"
import emptyPantImg from "@assets/armors/empty/pantalones.svg"
import emptyFootImg from "@assets/armors/empty/foot.svg"

import useSections from "@hooks/useSections"

function UserStats() {
	const { stats, equipment } = useSelector(state => state.player)
	const { health, armor, critic, dodge, karma, lucky } = stats,
		{ helmet, leftHand, chest, rightHand, legs, leftFoot, rightFoot } =
			equipment

	const headAlt = "head equipment",
		leftHandAlt = "hand equipment",
		rightHandAlt = "hand equipment",
		chestAlt = "chestplate",
		legsAlt = "legs equipment",
		footAlt = "foot equipment"

	return (
		<section className="flex gap-1 between h-100 align-center">
			<article>
				<ul className="list-icons">
					<li className="stat-icon health">{health}</li>
					<li className="stat-icon armor">{armor}</li>
					<li className="stat-icon critic">{critic}</li>
					<li className="stat-icon dodge">{dodge}</li>
					<li className="stat-icon lucky">{lucky}</li>
					<li className="stat-icon karma">{karma}</li>
				</ul>
			</article>
			<article className="stats-equipment-container">
				<div className="flex justify-center gap-1">
					<ItemStatsImage
						item={helmet}
						emptyAlt={headAlt}
						emptyImg={emptyHeadImg}
					/>
				</div>
				<div className="flex gap-1">
					<ItemStatsImage
						rotate={true}
						item={leftHand}
						emptyAlt={leftHandAlt}
						emptyImg={emptyHandImg}
					/>
					<ItemStatsImage
						item={chest}
						emptyAlt={chestAlt}
						emptyImg={emptyChestImg}
					/>
					<ItemStatsImage
						item={rightHand}
						emptyAlt={rightHandAlt}
						emptyImg={emptyHandImg}
					/>
				</div>
				<div className="flex justify-center gap-1">
					<ItemStatsImage
						item={legs}
						emptyAlt={legsAlt}
						emptyImg={emptyPantImg}
					/>
				</div>
				<div className="flex gap-1 justify-center">
					<ItemStatsImage
						item={leftFoot}
						emptyAlt={footAlt}
						emptyImg={emptyFootImg}
					/>
					<ItemStatsImage
						rotate={true}
						item={rightFoot}
						emptyAlt={footAlt}
						emptyImg={emptyFootImg}
					/>
				</div>
			</article>
		</section>
	)
}

export default UserStats

function ItemStatsImage({ item, emptyImg, emptyAlt, rotate }) {
	const { showItemInfo } = useSections()

	return (
		<img
			src={item?.src || emptyImg}
			alt={item?.alt || emptyAlt}
			title={item?.alt || emptyAlt}
			className={`quality ${item?.quality || ""} ${rotate ? "rotate" : ""}`}
			onClick={() => showItemInfo(item)}
		/>
	)
}
