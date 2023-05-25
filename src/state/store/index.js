import { combineReducers, configureStore } from "@reduxjs/toolkit"
import playerReducer from "@reducers/playerReducer"
import userConfigReducer from "@reducers/userConfigReducer"
import eventReducer from "@reducers/eventReducer"
import fightReducer from "@reducers/fightReducer"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import persistStore from "redux-persist/es/persistStore"

const persisteConfig = {
	version: 1,
	key: "root",
	storage,
}

const reducers = combineReducers({
	player: playerReducer,
	event: eventReducer,
	fight: fightReducer,
	userConfig: userConfigReducer,
})

const persistedReducer = persistReducer(persisteConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: { ignoredActions: ["persist/PERSIST"] },
		}),
})

const persistor = persistStore(store)

export { store, persistor }

if (import.meta.env.VITE_PURGE_STORE) persistor.purge()
