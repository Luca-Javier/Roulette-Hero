import { configureStore } from "@reduxjs/toolkit"
import playerReducer from "../reducers/playerReducer"
import userConfigReducer from "../reducers/userConfigReducer"
import eventReducer from "../reducers/eventReducer"
import fightReducer from "../reducers/fightReducer"

const store = configureStore({
  reducer: {
    player: playerReducer,
    userConfig: userConfigReducer,
    event: eventReducer,
    fight: fightReducer,
  },
})

export default store
