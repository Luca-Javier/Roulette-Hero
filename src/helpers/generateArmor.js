/**@typedef {import("../types.ts").Armor} Armor */

import getBasicItemTemplate from "./getBasicItemTemplate.js"
import { v4 as uuid } from "uuid"

const qualityArmor = {
  common: 0.2,
  rare: 0.4,
  epic: 0.6,
  legendary: 0.8,
}

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

  const { type, variant, quality, getRandomStat, src, alt, qualityMultiplier } =
    getBasicItemTemplate({ equipType, trullyKarma })

  const passiveEffects = {}

  if (variant === "lucky")
    passiveEffects.luckyStatMultiplier = 0.1 * qualityMultiplier[quality]

  if (variant === "pike")
    passiveEffects.reflectDamage = 0.1 * qualityMultiplier[quality]

  if (variant === "armored")
    passiveEffects.extraArmor = 0.1 * qualityMultiplier[quality]

  const armor = qualityArmor[quality],
    health = getRandomStat(4, 7)

  const item = {
    id: uuid(),
    src,
    alt,
    quality,
    equipType,
    type,
    armor,
    health,
    passiveEffects,
  }

  return item
}

export default generateArmor
