import getBasicItemTemplate from "./getBasicItemTemplate"
import { v4 as uuid } from "uuid"

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

  if (type === "hammer")
    passiveEffects.hammerDamageMultiplier = (0.1 * qualityMultiplier).toFixed(2)

  if (type === "rapier")
    passiveEffects.rapierCriticMultiplier = (0.1 * qualityMultiplier).toFixed(2)

  if (variant === "lucky")
    passiveEffects.luckyHitMultiplier = (0.1 * qualityMultiplier).toFixed(2)

  const activeEffects = {}

  if (variant === "bloody")
    activeEffects.lifeSteal = (0.1 * qualityMultiplier).toFixed(2)

  if (variant === "superCritic")
    activeEffects.superCritic = (0.2 * qualityMultiplier).toFixed(2)

  if (variant === "strongestAttack")
    activeEffects.strongestAttack = (0.1 * qualityMultiplier).toFixed(2)

  const attack = getRandomStat(4, 7)

  const item = {
    id: uuid(),
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
