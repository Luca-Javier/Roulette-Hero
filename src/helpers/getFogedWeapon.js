import getBasicItemTemplate from "./getBasicItemTemplate"
import getWeaponEffects from "./getWeaponEffects"

const upgradeQuality = {
	common: "rare",
	rare: "epic",
	epic: "legendary",
}

function getForgedWeapon({ item, trullyKarma }) {
	const { id, type, variant, src, equipType, quality } = item

	const newQuality = upgradeQuality[quality]

	const { qualityMultiplier, getMoneyForQuality, getRandomStat } =
		getBasicItemTemplate({
			equipType,
			trullyKarma,
			quality: newQuality,
		})

	// active effects
	const { passiveEffects, activeEffects } = getWeaponEffects({
		type,
		variant,
		multiplier: qualityMultiplier,
	})

	const alt = `a ${variant} ${newQuality} ${type}`

	const attack = getRandomStat(4, 7)

	return {
		id,
		price: getMoneyForQuality(newQuality),
		src,
		alt,
		quality: newQuality,
		equipType,
		type,
		attack,
		passiveEffects,
		activeEffects,
	}
}

export default getForgedWeapon
