import { createSlice } from "@reduxjs/toolkit"

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
      get trullyKarma() {
        return this.karma + this.karma * this.lucky * 0.25
      },
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
      const { name, stats, money, stones } = action.payload

      state.classs = name
      state.money = money
      state.stones = stones
      state.stats = { ...state.stats, ...stats }
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
