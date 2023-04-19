const qualityMultiplier = {
  common: 1,
  rare: 1.5,
  epic: 2,
  legendary: 3,
}

const getRandomStat = (min, max) =>
  Math.max(min, Math.round(Math.random() * max))

/**
 * Returns an item d by itemId
 *
 *
 *@param {string?} itemId  string that describes the sword i.e: sword-simple-rare.
 @param {number?} modifyKarma  number that multiply the karma to get better or worse item.
 *
 * @returns {object}  item
 */
const getItem = ({ itemId, trullyKarma, modifyKarma = 1.0 }) => {
  const karma = trullyKarma * modifyKarma

  // i.e: simple_common_swords_hand [variant, quality, type,equipKey]
  const itemCaracteristics = itemId.split("_")

  const variant = itemCaracteristics[0],
    quality = itemCaracteristics[1],
    type = itemCaracteristics[2],
    equipKey = itemCaracteristics[3]

  const qm = qualityMultiplier[quality]

  const item = {
    src: `/src/assets/weapons/${type + "s"}/${variant}-${type}.svg`,
    equipKey,
    quality,
    stats: {
      attack: equipKey === "hand" ? getRandomStat(4 * karma, 7) * qm : 0,
      armor: equipKey !== "hand" ? getRandomStat(1 * karma, 3) * qm : 0,
      health: equipKey !== "hand" ? getRandomStat(8 * karma, 15) * qm : 0,
    },
    effects: {
      luckyMultiplier: variant === "lucky" ? 0.6 * qm : 0,
      healthSteal: variant === "bloody" ? 0.3 * qm : 0,
      attackMultiplier: variant === "strongest" ? 0.2 * qm : 0,
      hammerDamageMultiplier: type === "hammer" ? 0.4 * qm : 0,
      rapierCritikMultiplier: type === "rapier" ? 0.4 * qm : 0,
      reflectDamage: variant === "pike" ? 0.3 * qm : 0,
      armorMultiplier: variant === "armored" ? 0.2 * qm : 0,
    },
  }

  return item
}
export default getItem
