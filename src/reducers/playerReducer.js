import { createSlice } from "@reduxjs/toolkit"
import { getTrullyKarma } from "../helpers/getTrullyKarma"

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
      trullyKarma: 0,
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
      const { name, stats, money, stones, equipment } = action.payload

      const trullyKarma = getTrullyKarma(stats.karma, stats.lucky)

      state.classs = name
      state.money = money
      state.stones = stones
      //todo trait with equipment

      equipment.map(item => state.equipment[item.equipKey])

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
