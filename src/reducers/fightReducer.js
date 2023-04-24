import { createSlice } from "@reduxjs/toolkit"
import getRandomEnemy from "../helpers/getRandomEnemy"

const fightReducer = createSlice({
  name: "fight",
  initialState: {
    enemy: {
      src: "",
      fullHealth: 100,
      currentHealth: 80,
      armor: null,
      attack: null,
      critickProb: 25,
      dodgeProb: 25,
    },
    player: {
      currentHealth: 50,
      critickProb: 25,
      dodgeProb: 25,
    },
    test: null,
  },
  reducers: {
    startFight: (state, action) => {
      const playerStats = action.payload.playerStats,
        numEvents = action.payload.numEvents

      state.enemy = { ...getRandomEnemy({ playerStats, numEvents }) }

      const probByLucky = playerStats.lucky > 0 ? 25 + playerStats.lucky : 25

      state.player = {
        currentHealth: playerStats.health,
        critickProb: probByLucky,
        dodgeProb: probByLucky,
      }
    },
  },
})

export const { startFight } = fightReducer.actions

export default fightReducer.reducer
