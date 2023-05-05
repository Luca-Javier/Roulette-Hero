import { configureStore } from "@reduxjs/toolkit"
import playerReducer from "@reducers/playerReducer"
import userConfigReducer from "@reducers/userConfigReducer"
import eventReducer from "@reducers/eventReducer"
import fightReducer from "@reducers/fightReducer"
import sectionReducer from "../reducers/sectionReducer"

const store = configureStore({
	reducer: {
		player: playerReducer,
		userConfig: userConfigReducer,
		event: eventReducer,
		fight: fightReducer,
		section: sectionReducer,
	},
})

export default store
