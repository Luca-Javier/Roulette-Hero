import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	music: 0,
	sounds: 100,
	unlockedCharacters: !import.meta.env.DEV
		? ["Default"]
		: ["Default", "Hammer Bro", "Knight", "Developer"],
}

const userConfigReducer = createSlice({
	name: "userConfig",
	initialState,
	reducers: {
		setMusic: (state, action) => {
			state.music = action.payload
		},
		setSound: (state, action) => {
			state.sounds = action.payload
		},
		unlockCharacter: characters => {},
	},
})

export const { setMusic, setSound, getMusicSoundFromStorage } =
	userConfigReducer.actions

export default userConfigReducer.reducer
