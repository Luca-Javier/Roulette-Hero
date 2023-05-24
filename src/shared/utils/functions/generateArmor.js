/**@typedef {import("../types.ts").Armor} Armor */

import { ARMOR_FOR_QUALITY } from "@constants/forjeItems.js"
import getBasicItemTemplate from "./getBasicItemTemplate.js"
import getWeaponEffects from "./getWeaponEffects.js"

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

	const passiveEffects = getWeaponEffects({
		type,
		variant,
		multiplier: qualityMultiplier,
	})

	const armor = ARMOR_FOR_QUALITY[quality],
		health = getRandomStat(4, 7)

	const item = {
		id,
		price,
		src,
		alt,
		quality,
		equipType,
		type,
		variant,
		armor,
		health,
		passiveEffects,
	}

	return item
}

export default generateArmor
