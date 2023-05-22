function getArmorEffects({ type, variant, multiplier }) {
	const passiveEffects = {}

	if (variant === "lucky") passiveEffects.luckyStatMultiplier = multiplier(0.1)

	//if (variant === "pike") passiveEffects.reflectDamage = multiplier(0.1)

	if (variant === "armored") passiveEffects.extraArmor = multiplier(0.1)

	return passiveEffects
}

export default getArmorEffects
