import getBasicItemTemplate from "./getBasicItemTemplate"
import { v4 as uuid } from "uuid"

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

	const passiveEffects = {}

	if (type === "hammer")
		passiveEffects.hammerDamageMultiplier = qualityMultiplier(0.1)

	if (type === "rapier")
		passiveEffects.rapierCriticMultiplier = qualityMultiplier(0.1)

	if (variant === "lucky")
		passiveEffects.luckyHitMultiplier = qualityMultiplier(0.1)

	const activeEffects = {}

	if (variant === "bloody") activeEffects.lifeSteal = qualityMultiplier(0.1)

	if (variant === "superCritic")
		activeEffects.superCritic = qualityMultiplier(0.2)

	if (variant === "strongestAttack")
		activeEffects.strongestAttack = qualityMultiplier(0.1)

	const attack = getRandomStat(4, 7)

	const item = {
		id,
		price,
		src,
		alt,
		quality,
		equipType,
		type,
		attack,
		passiveEffects,
		activeEffects,
	}

	return item
}

export default generateWeapon
