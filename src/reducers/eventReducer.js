import { createSlice } from "@reduxjs/toolkit"
import { EVENT } from "@config/eventsTypes"
import { EVENT_PROBS } from "@config/eventProbabilities"

const eventReducer = createSlice({
  name: "event",
  initialState: {
    event: EVENT.waiting,
    numEvents: 0,
    customEventMessage: "",
    cleanChat: "initial",
    itemInfo: null,
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload
    },
    setRandomEvent: state => {
      state.event = EVENT_PROBS.peek()[0]
    },
    addEventNum: state => {
      state.numEvents++
    },
    addMessage: (state, action) => {
      state.customEventMessage = action.payload
    },
    cleanChat: state => {
      state.cleanChat = !state.cleanChat
    },
    setItemInfo: (state, action) => {
      state.itemInfo = action.payload
    },
    cleanItemInfo: state => {
      state.itemInfo = null
    },
  },
})

export const {
  setEvent,
  setRandomEvent,
  addEventNum,
  addMessage,
  cleanChat,
  setItemInfo,
  cleanItemInfo,
} = eventReducer.actions

export default eventReducer.reducer
