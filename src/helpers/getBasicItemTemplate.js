import {
  ARMOR_PROBS,
  ARMOR_VARIANT_PROBS,
  QUALITY_ITEM_PROBS,
  WEAPONS_VARIANT_PROBS,
  WEAPON_PROBS,
} from "../config/itemProbabilities"

const qualityMultiplierDiccionary = {
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
 */
function getBasicItemTemplate({ equipType, trullyKarma }) {
  let type, variant

  if (equipType === "weapon") {
    type = WEAPON_PROBS.peek()[0]
    variant = WEAPONS_VARIANT_PROBS.peek()[0]
  } else {
    type = ARMOR_PROBS.peek()[0]
    variant = ARMOR_VARIANT_PROBS.peek()[0]
  }

  const quality = QUALITY_ITEM_PROBS.peek()[0],
    qualityMultiplier = qualityMultiplierDiccionary[quality]

  const getRandomStat = (min, max) => {
    const maxForQuality = max * qualityMultiplier,
      minForQuality = min * qualityMultiplier

    const minWithKarma = Math.round(
      minForQuality + minForQuality * trullyKarma * 0.1
    )

    const maxCalculated = Math.round(Math.random() * maxForQuality)

    return Math.max(minWithKarma, maxCalculated)
  }

  const src = `/src/assets/${equipType}s/${type + "s"}/${variant}-${type}.svg`,
    alt = `a ${variant} ${quality} ${type}`

  return { type, variant, quality, getRandomStat, src, alt, qualityMultiplier }
}

export default getBasicItemTemplate
