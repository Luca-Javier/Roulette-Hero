import { createSlice } from "@reduxjs/toolkit"
import { getTrullyKarma } from "../helpers/getTrullyKarma"
import setArmorStats from "../helpers/setArmorStats"
import removeStatsFromArmor from "../helpers/removeAmorStats"

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
        id: 1,
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
      legs: null,
      leftFoot: null,
      rightFoot: null,
    },
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

    addBackpag: (state, action) => {
      const { item } = action.payload

      if (item) state.backpag.push(item)
    },
    removeBackpag: (state, action) => {
      const { item } = action.payload

      const backpagWihtoutItem = state.backpag.filter(
        backpagItem => backpagItem.id !== item.id
      )

      state.backpag = backpagWihtoutItem
    },
    updateStatsFromArmor: (state, action) => {
      const { item, oldItem } = action.payload

      if (oldItem) removeStatsFromArmor({ state, item: oldItem })

      setArmorStats({ state, item })
    },

    equipItem: (state, action) => {
      const { item } = action.payload

      state.equipment[item.equipKey || item.type] = item
    },

    changeMoney: () => {},
    changeStones: () => {},
  },
})

export const {
  setName,
  setInitialCharacterStats,
  addBackpag,
  removeBackpag,
  equipItem,
  updateStatsFromArmor,
} = playerReducer.actions

export default playerReducer.reducer
