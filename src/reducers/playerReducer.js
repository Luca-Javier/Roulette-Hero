import { createSlice } from "@reduxjs/toolkit"
import { getTrullyKarma } from "../helpers/getTrullyKarma"

const playerReducer = createSlice({
  name: "player",
  initialState: {
    name: "Name",
    className: "Default",
    money: 22,
    stones: 2,
    stats: {
      health: 42,
      armor: 4,
      critic: 25,
      dodge: 15,
      lucky: 2,
      karma: 1,
      trullyKarma: 1.5,
    },
    equipment: {
      helmet: null,
      leftHand: {
        src: "/src/assets/weapons/swords/simple-sword.svg",
        quality: "common",
        alt: "a simple common sword",
        attack: 6,
        passiveEffects: {},
        activeEffects: {},
      },
      chest: null,
      rightHand: null,
      pants: null,
      leftFoot: null,
      rightFoot: null,
    },
    passiveEffects: {
      luckyStatMultiplier: 0,
      armorMultiplier: 0,
      reflectDamage: 0,
      /* hammerDamageMultiplier: 0,
      attackMultiplier: 0,
      rapierCriticMultiplier: 0,
      healthSteal: 0,
      luckyHitMultiplier: 0, */
    },
    backpag: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },

    setInitialStats: (state, action) => {
      const { name, stats, money, stones, items } = action.payload

      const trullyKarma = getTrullyKarma(stats.karma, stats.lucky)

      state.className = name
      state.money = money
      state.stones = stones

      items.forEach(item => (state.equipment[item.equipKey] = item))
      /*
      const generatedItems = items.map(item => {
        const itemId = item.itemId
        const trullyKarma = state.stats.trullyKarma.valueOf()

        return getItemById({ itemId, trullyKarma })
      })

      generatedItems.forEach(item => {
        if (item.equipKey === "hand") {
          const leftHandIsEmpty =
            Object.entries(state.equipment.leftHand).length === 0

          if (leftHandIsEmpty) return (state.equipment.leftHand = item)
          return (state.equipment.rightHand = item)
        }

        if (item.equipKey === "foot") {
          const leftFootIsEmpty =
            Object.entries(state.equipment.leftFoot).length === 0

          if (leftFootIsEmpty) return (state.equipment.leftFoot = item)
          return (state.equipment.rightFoot = item)
        }

        state.equipment[item.equipKey] = item
      })
*/
      state.stats = { ...state.stats, ...stats, trullyKarma }
    },
    updateAllFromItems: state => {
      const playerEquips = state.equipment

      for (let equipKey in playerEquips) {
        const equip = playerEquips[equipKey]

        if (equip !== null) {
          for (let keyStat in equip.stats) {
            state.stats[keyStat] += equip.stats[keyStat]
          }

          const EquipHasEffects = Object.entries(equip.effects).length !== 0
          if (EquipHasEffects) {
            for (let effectKey in equip.effects) {
              state.effects[effectKey] += equip.effects[effectKey]
            }
          }
        }
      }
    },
    changeStats: (state, action) => {},
    equipArmor: () => {},
    putBackpag: () => {},
    removeBackpag: () => {},
    changeMoney: () => {},
    changeStones: () => {},
  },
})

export const { setName, setInitialStats, updateAllFromItems } =
  playerReducer.actions

export default playerReducer.reducer
