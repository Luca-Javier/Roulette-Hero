import { createSlice } from "@reduxjs/toolkit"

//hacer un helper getter para unlockedCharacters
const userConfigReducer = createSlice({
  name: "userConfig",
  initialState: {
    music: 100,
    sound: 100,
    unlockedCharacters: ["Default"],
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
