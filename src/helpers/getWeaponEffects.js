function getWeaponEffects({ type, variant, multiplier }) {
	const passiveEffects = {}

	if (type === "hammer") passiveEffects.hammerDamageMultiplier = multiplier(0.1)

	if (type === "rapier") passiveEffects.rapierCriticMultiplier = multiplier(0.1)

	if (variant === "lucky") passiveEffects.luckyHitMultiplier = multiplier(0.1)

	const activeEffects = {}

	if (variant === "bloody") activeEffects.lifeSteal = multiplier(0.1)

	if (variant === "superCritic") activeEffects.superCritic = multiplier(0.2)

	if (variant === "strongestAttack")
		activeEffects.strongestAttack = multiplier(0.1)

	return { passiveEffects, activeEffects }
}

export default getWeaponEffects
