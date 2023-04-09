import { createSlice } from "@reduxjs/toolkit"

const gameReducer = createSlice({
  name: "gamaState",
  initialState: {
    gameState: { isPlaying: false },
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { setName } = gameReducer.actions

export default gameReducer.reducer

/* 

userInfo:{
  name,
  class/character,

}

*/
