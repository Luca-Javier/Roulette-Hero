import { i18n_alt } from "./translators"
import getBasicItemTemplate from "./getBasicItemTemplate"
import getWeaponEffects from "./getWeaponEffects"
import { UPDGRADE_QUALITY, DOWNGRADE_QUALITY } from "@constants/forjeItems"

function getForgedWeapon({ item, trullyKarma, downgrade }) {
	const { id, type, variant, src, equipType, quality } = item

	const newQuality = downgrade
		? DOWNGRADE_QUALITY[quality]
		: UPDGRADE_QUALITY[quality]

	const { qualityMultiplier, getMoneyForQuality, getRandomStat } =
		getBasicItemTemplate({
			equipType,
			trullyKarma,
			quality: newQuality,
		})

	const { passiveEffects, activeEffects } = getWeaponEffects({
		type,
		variant,
		multiplier: qualityMultiplier,
	})

	const alt = i18n_alt({ type, quality: newQuality, variant })

	const attack = getRandomStat(3, 7)

	return {
		id,
		price: getMoneyForQuality(newQuality),
		src,
		alt,
		quality: newQuality,
		equipType,
		type,
		variant,
		attack,
		passiveEffects,
		activeEffects,
	}
}

export default getForgedWeapon
