import { createSlice } from "@reduxjs/toolkit"
import { EVENT } from "../config/eventsTypes"
import getRandomEvent from "../helpers/getRandomEvent"

const eventReducer = createSlice({
  name: "event",
  initialState: {
    event: EVENT.waiting,
    numEvents: 0,
    customEventMessage: "",
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
    addMessage: (state, action) => {
      state.customEventMessage = action.payload
    },
  },
})

export const { setEvent, setRandomEvent, addEventNum, addMessage } =
  eventReducer.actions

export default eventReducer.reducer
