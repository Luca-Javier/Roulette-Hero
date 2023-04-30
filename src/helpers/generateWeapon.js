import getBasicItemTemplate from "./getBasicItemTemplate"

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

  const { type, variant, quality, getRandomStat, src, alt, qualityMultiplier } =
    getBasicItemTemplate({ equipType, trullyKarma })

  const passiveEffects = {}
  const activeEffects = {}

  if (type === "hammer")
    passiveEffects.hammerDamageMultiplier = 0.1 * qualityMultiplier[quality]
  else if (type === "rapier")
    passiveEffects.rapierCriticMultiplier = 0.1 * qualityMultiplier[quality]

  if (variant === "lucky")
    passiveEffects.luckyHitMultiplier = 0.1 * qualityMultiplier[quality]
  else if (variant === "bloody")
    activeEffects.lifeSteal = 0.1 * qualityMultiplier[quality]
  else if (variant === "superCritic")
    activeEffects.superCritic = 0.2 * qualityMultiplier[quality]
  else if (variant === "strongestAttack")
    activeEffects.strongestAttack = 0.1 * qualityMultiplier[quality]

  const attack = getRandomStat(4, 7)

  const item = {
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
