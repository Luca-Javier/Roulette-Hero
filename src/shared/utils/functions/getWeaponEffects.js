import { ACTIVE_EFFECTS, WEAPONS, WEAPON_VARIANTS } from "@constants/items"

function getWeaponEffects({ type, variant, multiplier }) {
	const passiveEffects = {}

	if (type === WEAPONS.hammer)
		passiveEffects.hammerDamageMultiplier = multiplier(0.1)

	if (type === WEAPONS.rapier)
		passiveEffects.rapierCriticMultiplier = multiplier(0.1)

	if (variant === WEAPON_VARIANTS.lucky)
		passiveEffects.luckyHitMultiplier = multiplier(0.1)

	const activeEffects = {}

	if (type === WEAPONS.sable) activeEffects.stoleMoney = multiplier(1)

	if (variant === WEAPON_VARIANTS.bloody)
		activeEffects.lifeSteal = multiplier(0.1)

	if (variant === WEAPON_VARIANTS.lethal)
		activeEffects.superCritic = multiplier(0.2)

	if (variant === WEAPON_VARIANTS.strong)
		activeEffects[ACTIVE_EFFECTS.strongestAttack] = multiplier(0.1)

	return { passiveEffects, activeEffects }
}

export default getWeaponEffects
