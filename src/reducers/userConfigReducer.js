import { createSlice } from "@reduxjs/toolkit"

const userConfigReducer = createSlice({
	name: "userConfig",
	initialState: {
		music: 100,
		sound: 100,
		unlockedCharacters: [
			"Default",
			"otherCharacter",
			"Hammer Bro",
			"armored",
			"effects",
		],
	},
	reducers: {
		getMusicSoundFromStorage: (musicLevel, soundLevel) => {},
		setMusic: musicLevel => {},
		setSound: soundLevel => {},
		unlockCharacter: characters => {},
	},
})

export const { setMusic, setSound, getMusicSoundFromStorage } =
	userConfigReducer.actions

export default userConfigReducer.reducer
