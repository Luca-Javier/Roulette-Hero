import { createSlice } from "@reduxjs/toolkit"
import { getTrullyKarma } from "../helpers/getTrullyKarma"
import getItemById from "../helpers/getItemById"
import generateWeaponId from "../helpers/generateWeaponId"

const playerReducer = createSlice({
  name: "player",
  initialState: {
    name: "Default",
    classs: "todo",
    money: 22,
    stones: 2,
    stats: {
      health: 73,
      armor: 4,
      attack: 3,
      lucky: 2,
      karma: 1,
      trullyKarma: 1.5,
    },
    equipment: {
      helmet: {},
      leftHand: {},
      chest: {},
      rightHand: {},
      pants: {},
      leftFoot: {},
      rightFoot: {},
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

      state.classs = name
      state.money = money
      state.stones = stones

      const generatedItems = items.map(item => {
        const itemId = item.itemId
        const trullyKarma = state.stats.trullyKarma.valueOf()

        return getItemById({ itemId, trullyKarma })
      })

      generatedItems.forEach(item => {
        if (item.equipKey === "hand") {
          if (Object.entries(state.equipment.leftHand).length === 0)
            return (state.equipment.leftHand = item)
          else return (state.equipment.rightHand = item)
        }
        if (item.equipKey === "foot") {
          if (Object.entries(state.equipment.leftFoot).length === 0)
            return (state.equipment.leftFoot = item)
          else return (state.equipment.rightFoot = item)
        }

        state.equipment[item.equipKey] = item
      })

      state.stats = { ...state.stats, ...stats, trullyKarma }
    },
    changeStats: (state, action) => {},
    equipArmor: () => {},
    putBackpag: () => {},
    removeBackpag: () => {},
    changeMoney: () => {},
    changeStones: () => {},
  },
})

export const { setName, setInitialStats } = playerReducer.actions

export default playerReducer.reducer
