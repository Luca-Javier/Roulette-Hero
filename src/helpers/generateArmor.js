/**@typedef {import("../types.ts").Armor} Armor */

import getBasicItemTemplate from "./getBasicItemTemplate.js"

const qualityArmor = {
	common: 0.2,
	rare: 0.4,
	epic: 0.6,
	legendary: 0.8,
}

/**
 * Generates a random weapon with random stats based on trullyKarma
 *
 * @param {object} props
 * @param {number} props.trullyKarma
 *
 * @return {Armor}
 */
function generateArmor({ trullyKarma }) {
	const equipType = "armor"

	const {
		type,
		variant,
		quality,
		getRandomStat,
		src,
		alt,
		qualityMultiplier,
		price,
		id,
	} = getBasicItemTemplate({ equipType, trullyKarma })

	const passiveEffects = {}

	if (variant === "lucky")
		passiveEffects.luckyStatMultiplier = qualityMultiplier(0.1)

	if (variant === "pike") passiveEffects.reflectDamage = qualityMultiplier(0.1)

	if (variant === "armored") passiveEffects.extraArmor = qualityMultiplier(0.1)

	const armor = qualityArmor[quality],
		health = getRandomStat(4, 7)

	const item = {
		id,
		price,
		src,
		alt,
		quality,
		equipType,
		type,
		armor,
		health,
		passiveEffects,
	}

	return item
}

export default generateArmor
