import { createSlice } from "@reduxjs/toolkit"
import { getTrullyKarma } from "../helpers/getTrullyKarma"
import setArmorStats from "../helpers/setArmorStats"

const playerReducer = createSlice({
  name: "player",
  initialState: {
    name: "Name",
    className: "Default",
    money: 22,
    stones: 2,
    stats: {
      health: 42,
      armor: 0,
      critic: 25,
      dodge: 15,
      lucky: 2,
      karma: 1,
      trullyKarma: 1.5,
    },
    classEffects: {},
    equipment: {
      helmet: null,
      leftHand: {
        src: "/src/assets/weapons/swords/simple-sword.svg",
        quality: "common",
        equipType: "weapon",
        type: "sword",
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
    /*  passiveEffects: {
      luckyStatMultiplier: 0,
      armorMultiplier: 0, // o extraArmor
      reflectDamage: 0,
      // division de los weapons
      hammerDamageMultiplier: 0,
      attackMultiplier: 0,
      rapierCriticMultiplier: 0,
      healthSteal: 0,
      luckyHitMultiplier: 0,
    }, */
    backpag: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },

    setInitialCharacterStats: (state, action) => {
      const { name, stats, money, stones, items, classEffects } = action.payload

      state.className = name
      state.money = money
      state.stones = stones
      state.classEffects = classEffects
      state.stats = stats

      items.forEach(item => {
        state.equipment[item.equipKey] = item

        if (item.equipType == "armor") setArmorStats(state, item)
      })
    },
    /* updateAllFromItems: state => {
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
    }, */
    addBackpag: (state, action) => {
      const { item } = action.payload

      state.backpag.push(item)
    },
    addStatsFromArmor: (state, action) => {
      const { itemArmor } = action.payload

      setArmorStats(state, itemArmor)
    },
    equipArmor: () => {},
    removeBackpag: () => {},
    changeMoney: () => {},
    changeStones: () => {},
  },
})

export const { setName, setInitialCharacterStats, addBackpag } =
  playerReducer.actions

export default playerReducer.reducer
