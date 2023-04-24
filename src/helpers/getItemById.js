/**@enum {number} values for multiply stats by item quality @ignore @readonly*/
const qualityMultiplier = {
  common: 1,
  rare: 1.5,
  epic: 2,
  legendary: 3,
}

const getRandomStat = (min, max) =>
  Math.max(min, Math.round(Math.random() * max))

/**
 * Returns an item d by itemId. You can pass modifyKarma to get better or worse items.
 *
 *
 * @param {object} props
 * @param {string} props.itemId
 * @param {number} props.trullyKarma
 * @param {number} [props.modifyKarma=1.0]
 *
 * @returns {object}  item
 */
const getItemById = ({ itemId, trullyKarma, modifyKarma = 1.0 }) => {
  const karma = trullyKarma * modifyKarma

  // i.e: simple_common_sword_hand = [variant, quality, type, equipKey]
  const itemCaracteristics = itemId.split("_")

  /**@readonly @ignore */
  const variant = itemCaracteristics[0],
    quality = itemCaracteristics[1],
    type = itemCaracteristics[2],
    equipKey = itemCaracteristics[3],
    qm = qualityMultiplier[quality]

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
      luckyStatMultiplier:
        variant === "lucky" && equipKey !== "hand" ? 0.6 * qm : 0,
      luckyHitMultiplier:
        variant === "lucky" && equipKey === "hand" ? 0.6 * qm : 0,
      healthSteal: variant === "bloody" ? 0.3 * qm : 0,
      attackMultiplier: variant === "strongest" ? 0.2 * qm : 0,
      hammerDamageMultiplier: type === "hammer" ? 0.4 * qm : 0,
      rapierCritikMultiplier: type === "rapier" ? 0.4 * qm : 0,
      reflectDamage: variant === "pike" ? 0.3 * qm : 0,
      armorMultiplier: variant === "armored" ? 0.2 * qm : 0,
    },
  }

  /**@todo testear esto */
  item.stats.forEach(stat => {
    if (stat === 0) delete item.stats[stat]
  })
  item.effects.forEach(effect => {
    if (effect === 0) delete item.effects[effect]
  })

  return item
}
export default getItemById
