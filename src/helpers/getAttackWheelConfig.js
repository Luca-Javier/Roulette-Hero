import getCustomOptionWheelStyle from "./getCustomOptionWheelStyle"

/**
 * Returns the possible attacks and the wheel config for the item
 *
 * @param {number} trullyKarma
 * @param {object} item
 *
 * @returns {[ possibleAttacks:object, wheelConfig:object ]}
 *
 * @example
 * getItemStats({ trullyKarma, item }): [ possibleAttacks, wheelConfig ]
 */
const getAttackWheelConfig = ({ trullyKarma, item, criticProb }) => {
  let karmaFromItem = 1,
    attackFromItem = 1,
    attackFromHammerItem = 1,
    criticFromRapierItem = 1

  Object.keys(item.passiveEffects).forEach(effectKey => {
    if (effectKey === "luckyHitMultiplier")
      return (karmaFromItem += item.passiveEffects[effectKey])

    if (effectKey === "attackMultiplier")
      return (attackFromItem += item.passiveEffects[effectKey])

    if (effectKey === "hammerDamageMultiplier")
      return (attackFromHammerItem += item.passiveEffects[effectKey])

    if (effectKey === "rapierCriticMultiplier")
      return (criticFromRapierItem += item.passiveEffects[effectKey])
  })

  let realKarma = trullyKarma * karmaFromItem,
    realAttack = item.attack * attackFromItem * attackFromHammerItem

  let allProb = 100

  const getProb = prob => {
    if (!prob) return allProb
    allProb -= prob
    return prob
  }

  const possibleEffectsAttacks = {}

  const activeEffects = Object.keys(item.activeEffects).map(effectKey => {
    const effectItem = item.activeEffects[effectKey]

    possibleEffectsAttacks[effectKey] = { ...effectItem, attack: realAttack }

    return {
      option: effectKey,
      optionSize: getProb(15 * realKarma),
      ...getCustomOptionWheelStyle({ option: effectKey }),
    }
  })

  const possibleAttacks = {
    normal: realAttack,
    critic: realAttack * 2 * criticFromRapierItem,
    fail: 0,
    dodged: 0,
    ...possibleEffectsAttacks,
  }

  const wheelConfig = {
    data: [
      {
        option: "critic",
        optionSize: getProb(criticProb * karmaFromItem),
        ...getCustomOptionWheelStyle({ option: "critic" }),
      },
      {
        option: "fail",
        optionSize: getProb(5),
        ...getCustomOptionWheelStyle({ option: "fail" }),
      },
      ...activeEffects,
      {
        option: "normal",
        optionSize: getProb(),
        ...getCustomOptionWheelStyle({ option: "normal" }),
      },
    ],
    config: {
      hidden: false,
      width: 110,
      height: 110,
      left: 120,
      top: 99,
      pointerHeight: 50,
    },
  }

  return { possibleAttacks, wheelConfig }
}

export default getAttackWheelConfig
