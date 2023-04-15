import { configureStore } from "@reduxjs/toolkit"
import playerReducer from "../reducers/playerReducer"
import userConfigReducer from "../reducers/userConfigReducer"
import eventReducer from "../reducers/eventReducer"

const store = configureStore({
  reducer: {
    player: playerReducer,
    userConfig: userConfigReducer,
    event: eventReducer,
  },
})

export default store
