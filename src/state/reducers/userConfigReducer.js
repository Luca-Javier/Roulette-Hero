import { createSlice } from "@reduxjs/toolkit"
import { ACHIEVES } from "@constants/achieves"

const initialState = {
	music: 0,
	sounds: 100,
	unlockedCharacters: import.meta.env.VITE_UNLOCK_ACHIEVES
		? [1, 2, 3, 99]
		: [1],
	language: "",
	achieves: import.meta.env.VITE_UNLOCK_ACHIEVES ? Object.values(ACHIEVES) : [],
}

const userConfigReducer = createSlice({
	name: "userConfig",
	initialState,
	reducers: {
		setMusic: (state, action) => {
			state.music = action.payload
		},

		unlockCharacter: (state, action) => {
			const { id, achieve } = action.payload

			state.unlockedCharacters.push(id)
			state.achieves.push(ACHIEVES[achieve])
		},
		setLanguage: (state, action) => {
			state.language = action.payload
		},
	},
})

export const {
	setMusic,
	getMusicSoundFromStorage,
	setLanguage,
	unlockCharacter,
} = userConfigReducer.actions

export default userConfigReducer.reducer
