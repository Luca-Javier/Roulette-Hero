import {
	ARMOR_PROBS,
	ARMOR_VARIANT_PROBS,
	QUALITY_ITEM_PROBS,
	WEAPONS_VARIANT_PROBS,
	WEAPON_PROBS,
} from "@config/itemProbabilities"
import { v4 as uuid } from "uuid"
import { i18n_alt } from "../shared/translates/translators"

const qualityMultiplierDictionary = {
	common: 1,
	rare: 1.5,
	epic: 2,
	legendary: 3,
}

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

	if (equipType === "weapon") {
		type = WEAPON_PROBS.peek()[0]
		variant = WEAPONS_VARIANT_PROBS.peek()[0]
	} else {
		type = ARMOR_PROBS.peek()[0]
		variant = ARMOR_VARIANT_PROBS.peek()[0]
	}

	const quality = selectedQuality || QUALITY_ITEM_PROBS.peek()[0]

	const qualityMultiplier = stat =>
		+(stat * qualityMultiplierDictionary[quality]).toFixed(2)

	const getRandomStat = (min, max) => {
		const maxForQuality = qualityMultiplier(max),
			minForQuality = qualityMultiplier(min)

		const minWithKarma = minForQuality + minForQuality * trullyKarma * 0.1

		const maxCalculated = Math.random() * maxForQuality

		return Math.round(Math.max(minWithKarma, maxCalculated))
	}

	const src = `/src/assets/${equipType}s/${type + "s"}/${variant}-${type}.svg`,
		alt = i18n_alt({ type, quality, variant })

	const getMoneyForQuality = quality => {
		const prices = {
			common: 15,
			rare: 45,
			epic: 60,
			legendary: 100,
		}

		const cost = prices[quality]

		//todo afectar esto con suerte
		const randomVariant = Math.max(0.8, Math.random() * 1.2)

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
