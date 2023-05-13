import { createSlice } from "@reduxjs/toolkit"

const userConfigReducer = createSlice({
	name: "userConfig",
	initialState: {
		music: 0,
		sounds: 100,
		unlockedCharacters: [
			"Default",
			"otherCharacter",
			"Hammer Bro",
			"armored",
			"effects",
		],
	},
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
