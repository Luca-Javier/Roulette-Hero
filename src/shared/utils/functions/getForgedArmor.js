import getArmorEffects from "./getArmorEffect"
import getBasicItemTemplate from "./getBasicItemTemplate"
import { i18n_alt } from "./translators"

const qualityArmor = {
	common: 0.2,
	rare: 0.4,
	epic: 0.6,
	legendary: 0.8,
}

const upgradeQuality = {
	common: "rare",
	rare: "epic",
	epic: "legendary",
}

function getForgedArmor({ item, trullyKarma }) {
	const { id, type, variant, src, equipType, quality } = item

	const newQuality = upgradeQuality[quality]

	const { qualityMultiplier, getMoneyForQuality, getRandomStat } =
		getBasicItemTemplate({
			equipType,
			trullyKarma,
			quality: newQuality,
		})

	const passiveEffects = getArmorEffects({
		type,
		variant,
		multiplier: qualityMultiplier,
	})

	const alt = i18n_alt({ type, quality: newQuality, variant })

	const armor = qualityArmor[newQuality],
		health = getRandomStat(4, 7)

	console.log(health)

	return {
		id,
		price: getMoneyForQuality(newQuality),
		src,
		alt,
		quality: newQuality,
		equipType,
		type,
		armor,
		health,
		passiveEffects,
	}
}

export default getForgedArmor
