//@ts-check
import {
  QUALITY_ITEM_PROBS,
  WEAPONS_VARIANT_PROBS,
  WEAPON_PROBS,
} from "../config/itemProbabilities"

const qualityMultiplier = {
  common: 1,
  rare: 1.5,
  epic: 2,
  legendary: 3,
}

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
  const type = WEAPON_PROBS.peek()[0],
    variant = WEAPONS_VARIANT_PROBS.peek()[0],
    quality = QUALITY_ITEM_PROBS.peek()[0]

  const getRandomStat = (min, max) => {
    const maxForQuality = max * qualityMultiplier[quality],
      minForQuality = min * qualityMultiplier[quality]

    const minWithKarma = Math.round(
      minForQuality + minForQuality * trullyKarma * 0.1
    )

    const maxCalculated = Math.round(Math.random() * maxForQuality)

    return Math.max(minWithKarma, maxCalculated)
  }

  const src = `/src/assets/weapons/${type + "s"}/${variant}-${type}.svg`,
    alt = `a ${variant} ${quality} ${type}`

  const passiveEffects = {}

  if (type === "hammer")
    passiveEffects.hammerDamageMultiplier = 0.1 * qualityMultiplier[quality]

  if (type === "rapier")
    passiveEffects.rapierCriticMultiplier = 0.1 * qualityMultiplier[quality]

  if (variant === "lucky")
    passiveEffects.luckyHitMultiplier = 0.1 * qualityMultiplier[quality]

  const activeEffects = {}

  if (variant === "bloody")
    activeEffects.lifeSteal = 0.1 * qualityMultiplier[quality]

  if (variant === "superCritic")
    activeEffects.superCritic = 0.2 * qualityMultiplier[quality]

  if (variant === "strongestAttack")
    activeEffects.strongestAttack = 0.1 * qualityMultiplier[quality]

  const attack = getRandomStat(4, 7)

  const item = {
    src,
    alt,
    quality,
    equipType: "weapon",
    type,
    attack,
    passiveEffects,
    activeEffects,
  }

  return item
}

export default generateWeapon
