import {
	ARMOR_FOR_QUALITY,
	DOWNGRADE_QUALITY,
	UPDGRADE_QUALITY,
} from "@constants/forjeItems"
import getArmorEffects from "./getArmorEffect"
import getBasicItemTemplate from "./getBasicItemTemplate"
import { i18n_alt } from "./translators"

function getForgedArmor({ item, trullyKarma, downgrade }) {
	const { id, type, variant, src, equipType, quality } = item

	const newQuality = downgrade
		? DOWNGRADE_QUALITY[quality]
		: UPDGRADE_QUALITY[quality]

	const { qualityMultiplier, price, getRandomStat } = getBasicItemTemplate({
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

	const armor = ARMOR_FOR_QUALITY[newQuality],
		health = getRandomStat(4, 7)

	return {
		id,
		price,
		src,
		alt,
		quality: newQuality,
		equipType,
		type,
		variant,
		armor,
		health,
		passiveEffects,
	}
}

export default getForgedArmor
