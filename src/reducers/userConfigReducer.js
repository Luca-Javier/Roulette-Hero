import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	music: 0,
	sounds: 100,
	unlockedCharacters: !import.meta.env.DEV ? [1] : [1, 2, 3, 99],
	language: "",
}

const userConfigReducer = createSlice({
	name: "userConfig",
	initialState,
	reducers: {
		setMusic: (state, action) => {
			state.music = action.payload
		},

		unlockCharacter: characters => {},
		setLanguage: (state, action) => {
			state.language = action.payload
		},
	},
})

export const { setMusic, getMusicSoundFromStorage, setLanguage } =
	userConfigReducer.actions

export default userConfigReducer.reducer
