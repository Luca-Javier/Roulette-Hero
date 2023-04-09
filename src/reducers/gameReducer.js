import { createSlice } from "@reduxjs/toolkit"

const gameReducer = createSlice({
  name: "counter",
  initialState: {
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
