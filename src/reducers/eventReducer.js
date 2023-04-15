import { createSlice } from "@reduxjs/toolkit"
import { EVENT } from "../config/eventsTypes"
import getRandomEvent from "../helpers/getRandomEvent"

const eventReducer = createSlice({
  name: "event",
  initialState: {
    event: EVENT.waiting,
    get walkTime() {
      const randomTime = Math.random() * 7000
      return Math.max(2000, randomTime)
    },
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload
    },
    setRandomEvent: state => {
      state.event = getRandomEvent()
    },
  },
})

export const { setEvent, setRandomEvent } = eventReducer.actions

export default eventReducer.reducer
