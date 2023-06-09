import React from "react"
import luckyHitMultiplierIcon from "@assets/icons/effects/lucky-hit-multiplier.svg"
import hammerDamageMultiplierIcon from "@assets/icons/effects/hammer-damage-multiplier.svg"
import rapierCriticMultiplierIcon from "@assets/icons/effects/rapier-critic-multiplier.ico"
import lifeStealIcon from "@assets/icons/effects/life-steal.svg"
import extraHammerDamageIcon from "@assets/icons/effects/class-hammer.ico"
import superCriticIcon from "@assets/icons/effects/super-critic.svg"
import strongestIcon from "@assets/icons/effects/strongest-attack.svg"
import { useSelector } from "react-redux"
import ItemImage from "./ItemImage"
import { ACTIVE_EFFECTS, WEAPON_PASSIVE_EFFECTS } from "@constants/items"

function WeaponInfo({ item }) {
	const {
		stats: { critic },
		classEffects,
	} = useSelector(state => state.player)

	const { alt, attack, passiveEffects, activeEffects, price } = item

	let attackFromClass = 1

	if (classEffects.extraHammerDamage && item.type === "hammer")
		attackFromClass += classEffects.extraHammerDamage

	let attackFromEffect = 1

	if (passiveEffects.hammerDamageMultiplier)
		attackFromEffect += passiveEffects.hammerDamageMultiplier

	const realAttack = Math.round(attack * attackFromClass * attackFromEffect)

	return (
		<div className="flex flex-column w-100 mb-2">
			<h3 className="grow-1 font-1 mt-0">{alt}</h3>
			<div className="flex between">
				<ItemImage item={item} className={"item-info-img quality"} />
				<article className="info-passive-effects">
					<PassiveEffects effects={passiveEffects} />
					<ClassEffects effects={classEffects} />
					<ActiveEffects effects={activeEffects} />
				</article>
			</div>
			<article className="info-stats">
				<p className="stat-icon attack">
					{attack}
					{attack !== realAttack && <span> = {realAttack}</span>}
				</p>
				<p className="stat-icon critic">{critic}</p>
				<p className=" money">{price}</p>
			</article>
			{/* <article className="info-active-effects">
			</article> */}
		</div>
	)
}

export default WeaponInfo

function ClassEffects({ effects }) {
	const { extraHammerDamage } = effects

	return (
		<>
			{extraHammerDamage && (
				<img
					style={{ filter: "invert(1)" }}
					src={extraHammerDamageIcon}
					alt="Extra hammer damage from hammer class"
					title={`extra ${extraHammerDamage}% damage with hammers`}
				/>
			)}
		</>
	)
}

function PassiveEffects({ effects }) {
	const {
		[WEAPON_PASSIVE_EFFECTS.luckyHitMultiplier]: luckyHitMultiplier,
		[WEAPON_PASSIVE_EFFECTS.hammerDamageMultiplier]: hammerDamageMultiplier,
		[WEAPON_PASSIVE_EFFECTS.rapierCriticMultiplier]: rapierCriticMultiplier,
	} = effects

	return (
		<>
			{luckyHitMultiplier && (
				<img
					src={luckyHitMultiplierIcon}
					alt="Effect lucky hit multiplier icon"
					title={`add ${luckyHitMultiplier}% lucky to your hits`}
				/>
			)}
			{hammerDamageMultiplier && (
				<img
					src={hammerDamageMultiplierIcon}
					alt="Effect hammer damage multiplier icon"
					title={`add ${hammerDamageMultiplier}% damage to your hits`}
				/>
			)}
			{rapierCriticMultiplier && (
				<img
					src={rapierCriticMultiplierIcon}
					style={{ filter: "invert(0.8)" }}
					alt="Effect rapier critic multiplier icon"
					title={`add ${rapierCriticMultiplier}% critic damage to your hits`}
				/>
			)}
		</>
	)
}

function ActiveEffects({ effects }) {
	const {
		[ACTIVE_EFFECTS.lifeSteal]: lifeSteal,
		[ACTIVE_EFFECTS.superCritic]: superCritic,
		[ACTIVE_EFFECTS.strongestAttack]: strongestAttack,
	} = effects

	return (
		<>
			{lifeSteal && (
				<img
					src={lifeStealIcon}
					alt="Stole enemy health"
					title={`stole ${lifeSteal}% of your dealt damage as health`}
				/>
			)}
			{superCritic && (
				<img
					src={superCriticIcon}
					alt="A super critic attack"
					title={`deal a critic hit with ${superCritic}% more damage `}
				/>
			)}
			{strongestAttack && (
				<img
					src={strongestIcon}
					alt="A strongest attack"
					title={`deal a normal attack with ${strongestAttack}% more damage`}
				/>
			)}
		</>
	)
}
