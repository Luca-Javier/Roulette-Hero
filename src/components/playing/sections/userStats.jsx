import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import emptyHeadImg from "@assets/armors/empty/head.svg"
import emptyHandImg from "@assets/armors/empty/hand.svg"
import emptyChestImg from "@assets/armors/empty/chest.svg"
import emptyPantImg from "@assets/armors/empty/pantalones.svg"
import emptyFootImg from "@assets/armors/empty/foot.svg"

import useSections from "@hooks/useSections"

function UserStats() {
	//Imports
	const { stats, equipment } = useSelector(state => state.player)
	const { health, armor, critic, dodge, karma, lucky } = stats,
		{ helmet, leftHand, chest, rightHand, legs, leftFoot, rightFoot } =
			equipment

	const { showItemInfo } = useSections()

	//Variables
	const headAlt = "head equipment",
		leftHandAlt = "hand equipment",
		rightHandAlt = "hand equipment",
		chestAlt = "chestplate",
		legsAlt = "legs equipment",
		footAlt = "foot equipment"

	//Events
	/* const showItemInfoFilter = item => {
		if (item) showItemInfo(item)
	} */

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
					<img
						src={helmet?.src || emptyHeadImg}
						alt={headAlt}
						className={`quality  ${helmet?.quality || ""}`}
						onClick={() => showItemInfo(helmet)}
					/>
				</div>
				<div className="flex gap-1">
					<img
						src={leftHand?.src || emptyHandImg}
						alt={leftHandAlt}
						className={`quality rotate ${leftHand?.quality || ""}`}
						onClick={() => showItemInfo(leftHand)}
					/>
					<img
						src={chest?.src || emptyChestImg}
						alt={chestAlt}
						className={`quality ${chest?.quality || ""}`}
						onClick={() => showItemInfo(chest)}
					/>
					<img
						src={rightHand?.src || emptyHandImg}
						alt={rightHandAlt}
						className={`quality  ${rightHand?.quality || ""}`}
						onClick={() => showItemInfo(rightHand)}
					/>
				</div>
				<div className="flex justify-center gap-1">
					<img
						src={legs?.src || emptyPantImg}
						alt={legsAlt}
						className={`quality ${legs?.quality || ""}`}
						onClick={() => showItemInfo(legs)}
					/>
				</div>
				<div className="flex gap-1 justify-center">
					<img
						src={leftFoot?.src || emptyFootImg}
						alt={footAlt}
						className={`quality ${leftFoot?.quality || ""}`}
						onClick={() => showItemInfo(leftFoot)}
					/>
					<img
						src={rightFoot?.src || emptyFootImg}
						alt={footAlt}
						className={`quality rotate ${rightFoot?.quality || ""}`}
						onClick={() => showItemInfo(rightFoot)}
					/>
				</div>
			</article>
		</section>
	)
}

export default UserStats
