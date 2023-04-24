import { createSlice } from "@reduxjs/toolkit"
import { EVENT } from "../config/eventsTypes"
import getRandomEvent from "../helpers/getRandomEvent"

const eventReducer = createSlice({
  name: "event",
  initialState: {
    event: EVENT.waiting,
    numEvents: 0,
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload
    },
    setRandomEvent: state => {
      state.event = getRandomEvent()
    },
    addEventNum: state => {
      state.numEvents++
    },
  },
})

export const { setEvent, setRandomEvent, addEventNum } = eventReducer.actions

export default eventReducer.reducer
