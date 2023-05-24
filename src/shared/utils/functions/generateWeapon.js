import getBasicItemTemplate from "./getBasicItemTemplate"
import getWeaponEffects from "./getWeaponEffects"

/**@typedef {import("../types.ts").Weapon} Weapon */

/**
 * Generates a random weapon with random stats based on trullyKarma
 *
 * @param {object} props
 * @param {number} props.trullyKarma
 *
 * @return {Weapon}
 */
const generateWeapon = ({ trullyKarma }) => {
	const equipType = "weapon"

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

	const { passiveEffects, activeEffects } = getWeaponEffects({
		type,
		variant,
		multiplier: qualityMultiplier,
	})

	const attack = getRandomStat(4, 7)

	const item = {
		id,
		price,
		src,
		alt,
		quality,
		equipType,
		type,
		variant,
		attack,
		passiveEffects,
		activeEffects,
	}

	return item
}

export default generateWeapon
