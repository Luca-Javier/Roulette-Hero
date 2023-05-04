import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import emptyHeadImg from "@assets/armors/empty/head.svg"
import emptyHandImg from "@assets/armors/empty/hand.svg"
import emptyChestImg from "@assets/armors/empty/chest.svg"
import emptyPantImg from "@assets/armors/empty/pantalones.svg"
import emptyFootImg from "@assets/armors/empty/foot.svg"

function UserStats() {
	//Imports
	const state = useSelector(state => state.player)
	const { health, armor, critic, dodge, karma, lucky } = state.stats,
		{ helmet, leftHand, chest, rightHand, legs, leftFoot, rightFoot } =
			state.equipment

	//Variables
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
					<img
						src={helmet?.src || emptyHeadImg}
						alt={headAlt}
						className={`quality  ${helmet?.quality || ""}`}
					/>
				</div>
				<div className="flex gap-1">
					<img
						src={leftHand?.src || emptyHandImg}
						alt={leftHandAlt}
						className={`quality rotate ${leftHand?.quality || ""}`}
					/>
					<img
						src={chest?.src || emptyChestImg}
						alt={chestAlt}
						className={`quality ${chest?.quality || ""}`}
					/>
					<img
						src={rightHand?.src || emptyHandImg}
						alt={rightHandAlt}
						className={`quality  ${rightHand?.quality || ""}`}
					/>
				</div>
				<div className="flex justify-center gap-1">
					<img
						src={legs?.src || emptyPantImg}
						alt={legsAlt}
						className={`quality ${legs?.quality || ""}`}
					/>
				</div>
				<div className="flex gap-1 justify-center">
					<img
						src={leftFoot?.src || emptyFootImg}
						alt={footAlt}
						className={`quality ${leftFoot?.quality || ""}`}
					/>
					<img
						src={rightFoot?.src || emptyFootImg}
						alt={footAlt}
						className={`quality rotate ${rightFoot?.quality || ""}`}
					/>
				</div>
			</article>
		</section>
	)
}

export default UserStats
