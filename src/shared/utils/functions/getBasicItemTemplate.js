import {
	ARMOR_PROBS,
	ARMOR_VARIANT_PROBS,
	QUALITY_ITEM_PROBS,
	WEAPON_VARIANT_PROBS,
	WEAPON_PROBS,
} from "@constants/itemsProbabilites"
import { v4 as uuid } from "uuid"
import { i18n_alt } from "@functions/translators"
import { QUALITY_STATS_MULTIPLIER } from "@constants/forjeItems"
import { PRICES_FOR_QUALTITY, EQUIPTYPE } from "@constants/items"

/**
 * Generates the basics to create a new weapon or armor item
 *
 * @param {object} props
 * @param {"weapon"|"armor"} props.equipType
 * @param {number} props.trullyKarma
 * @param {string} [props.quality]
 */
function getBasicItemTemplate({ equipType, trullyKarma, selectedQuality }) {
	let type, variant

	if (equipType === EQUIPTYPE.weapon) {
		type = WEAPON_PROBS.peek()[0]
		variant = WEAPON_VARIANT_PROBS.peek()[0]
	} else {
		type = ARMOR_PROBS.peek()[0]
		variant = ARMOR_VARIANT_PROBS.peek()[0]
	}

	const quality = selectedQuality || QUALITY_ITEM_PROBS.peek()[0]

	const qualityMultiplier = stat =>
		+(stat * QUALITY_STATS_MULTIPLIER[quality]).toFixed(2)

	const getRandomStat = (min, max) => {
		const maxForQuality = qualityMultiplier(max),
			minForQuality = qualityMultiplier(min)

		const minWithKarma = minForQuality + minForQuality * trullyKarma * 0.1

		const maxCalculated = Math.random() * maxForQuality

		return Math.round(Math.max(minWithKarma, maxCalculated))
	}

	const src = `assets/${equipType}s/${type + "s"}/${variant}-${type}.svg`,
		alt = i18n_alt({ type, quality, variant })

	const getMoneyForQuality = quality => {
		const cost = PRICES_FOR_QUALTITY[quality]

		//todo afectar esto con suerte
		const randomVariant = Math.max(0.7, Math.random() * 1.3)
		console.log(Math.floor(cost * randomVariant))
		return Math.floor(cost * randomVariant)
	}

	const price = getMoneyForQuality(quality)

	return {
		id: uuid(),
		price,
		type,
		variant,
		quality,
		getRandomStat,
		src,
		alt,
		qualityMultiplier,
		getMoneyForQuality,
	}
}

export default getBasicItemTemplate
