import React from "react"
import luckyHitMultiplierIcon from "@assets/icons/effects/lucky-hit-multiplier.svg"
import reflectDamageIcon from "@assets/icons/effects/reflect-damage.ico"
import extraArmorIcon from "@assets/icons/effects/extra-armor.svg"
import ItemImage from "./ItemImage"

function ArmorInfo({ item }) {
	const { alt, health, armor, passiveEffects, price } = item

	let armorFromEffect = 0

	if (passiveEffects.extraArmor) armorFromEffect += passiveEffects.extraArmor

	const realArmor = (armor + armorFromEffect).toFixed(1)

	return (
		<div className="flex flex-column w-100 mb-2">
			<h3 className="grow-1 font-1 mt-0">{alt}</h3>
			<div className="flex between">
				<ItemImage item={item} className={"item-info-img quality"} />
				<article className="info-passive-effects">
					<PassiveEffects effects={passiveEffects} />
				</article>
			</div>
			<article className="info-stats">
				<p className="stat-icon health">{health}</p>
				<p className="stat-icon armor">
					{armor}
					{realArmor !== armor && <span> = {realArmor}</span>}
				</p>
				<p className="money">{price}</p>
			</article>
		</div>
	)
}

export default ArmorInfo

function PassiveEffects({ effects }) {
	const { luckyStatMultiplier, reflectDamage, extraArmor } = effects

	return (
		<>
			{luckyStatMultiplier && (
				<img
					src={luckyHitMultiplierIcon}
					alt="Effect lucky hit multiplier icon"
					title={`add ${luckyStatMultiplier}% lucky`}
				/>
			)}
			{/* reflectDamage && (
				<img
					src={reflectDamageIcon}
					style={{ filter: "invert(0.8)" }}
					alt="Reflect damage effect icon"
					title={`return ${reflectDamage}% of damage to the enemy`}
				/>
			) */}
			{extraArmor && (
				<img
					src={extraArmorIcon}
					alt="Extra armor icon"
					title={`extra ${extraArmor} armor`}
				/>
			)}
		</>
	)
}
