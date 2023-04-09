import { configureStore } from "@reduxjs/toolkit"
//import reducer from "../reducers/"
import gameReducer from "../reducers/gameReducer"

const store = configureStore({ reducer: { game: gameReducer } })

//store.subscribe(() => console.log(store))

export default store
