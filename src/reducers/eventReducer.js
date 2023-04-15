import { createSlice } from "@reduxjs/toolkit"

const eventReducer = createSlice({
  name: "event",
  initialState: {
    event: "",
  },
  reducers: {
    setEvent: () => {
      //todo un siwtch o muchos ifs
    },
  },
})

export const { setEvent } = eventReducer.actions

export default eventReducer.reducer
