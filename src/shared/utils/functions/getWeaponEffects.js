import {
	ACTIVE_EFFECTS,
	WEAPONS,
	WEAPON_VARIANTS,
	WEAPON_PASSIVE_EFFECTS,
} from "@constants/items"

function getWeaponEffects({ type, variant, multiplier }) {
	const passiveEffects = {}

	if (type === WEAPONS.hammer)
		passiveEffects[WEAPON_PASSIVE_EFFECTS.hammerDamageMultiplier] =
			multiplier(0.1)

	if (type === WEAPONS.rapier)
		passiveEffects[WEAPON_PASSIVE_EFFECTS.rapierCriticMultiplier] =
			multiplier(0.1)

	if (variant === WEAPON_VARIANTS.lucky)
		passiveEffects[WEAPON_PASSIVE_EFFECTS.luckyHitMultiplier] = multiplier(0.1)

	const activeEffects = {}

	if (type === WEAPONS.sable)
		activeEffects[ACTIVE_EFFECTS.stoleMoney] = multiplier(3)

	if (type === WEAPONS.pickaxe)
		activeEffects[ACTIVE_EFFECTS.stoleStones] = multiplier(1)

	if (variant === WEAPON_VARIANTS.bloody)
		activeEffects[ACTIVE_EFFECTS.lifeSteal] = multiplier(0.1)

	if (variant === WEAPON_VARIANTS.lethal)
		activeEffects[ACTIVE_EFFECTS.superCritic] = multiplier(0.2)

	if (variant === WEAPON_VARIANTS.strong)
		activeEffects[ACTIVE_EFFECTS.strongestAttack] = multiplier(0.1)

	return { passiveEffects, activeEffects }
}

export default getWeaponEffects
