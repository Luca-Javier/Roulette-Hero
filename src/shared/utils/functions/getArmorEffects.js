import { ARMOR_EFFECTS, ARMOR_VARIANTS } from "@constants/items"

function getArmorEffects({ variant, multiplier }) {
	const passiveEffects = {}

	if (variant === ARMOR_VARIANTS.lucky)
		passiveEffects[ARMOR_EFFECTS.luckyStatMultiplier] = multiplier(0.1)

	//if (variant === "pike") passiveEffects.reflectDamage = multiplier(0.1)

	if (variant === ARMOR_VARIANTS.armored)
		passiveEffects[ARMOR_EFFECTS.extraArmor] = multiplier(0.1)

	return passiveEffects
}

export default getArmorEffects
