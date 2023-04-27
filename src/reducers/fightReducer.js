import { createSlice } from "@reduxjs/toolkit"
import getRandomEnemy from "../helpers/getRandomEnemy"
import getAttackWheelConfig from "../helpers/getAttackWheelConfig"

const fightReducer = createSlice({
  name: "fight",
  initialState: {
    enemy: {
      src: "",
      fullHealth: null,
      currentHealth: null,
      armor: null,
      attack: null,
      critickProb: null,
      dodgeProb: null,
    },
    player: {
      fullHealth: null,
      currentHealth: null,
      dodge: null,
      leftAttack: { possibleAttacks: null, wheelConfig: null },
      rightAttack: { possibleAttacks: null, wheelConfig: null },
    },
    animationClass: "none",
  },
  reducers: {
    prepareEnemyToFight: (state, action) => {
      const playerStats = action.payload.playerData.stats,
        numEvents = action.payload.numEvents

      state.enemy = { ...getRandomEnemy({ playerStats, numEvents }) }
    },
    preparePlayerToFight: (state, action) => {
      const playerData = action.payload.playerData,
        { trullyKarma, critic: criticProb, dodge } = playerData.stats,
        { leftHand, rightHand } = playerData.equipment

      if (leftHand !== null) {
        const { possibleAttacks, wheelConfig } = getAttackWheelConfig({
          trullyKarma,
          item: leftHand,
          criticProb,
        })

        state.player.dodge = dodge
        state.player.leftAttack = { possibleAttacks, wheelConfig }
      }

      if (rightHand !== null) {
        const { possibleAttacks, wheelConfig } = getAttackWheelConfig({
          trullyKarma,
          item: rightHand,
          criticProb,
        })

        state.player.rightAttack = { possibleAttacks, wheelConfig }
      }

      state.player.fullHealth = playerData.stats.health
      state.player.currentHealth = playerData.stats.health
      state.player.dodge = playerData.stats.dodge
    },
    attackEnemy: (state, action) => {
      const res = action.payload.res,
        attack = action.payload.attack

      if (
        res === "normal" ||
        res === "fail" ||
        res === "critic" ||
        res === "dodged"
      )
        state.enemy.currentHealth -= attack
      else if (res === "lifeSteal") {
        state.enemy.currentHealth -= attack.attack

        const lifeSteal = Math.floor(attack.attack * attack.effect)

        if (state.player.currentHealth + lifeSteal > state.player.fullHealth)
          state.player.currentHealth = state.player.fullHealth
        else state.player.currentHealth += lifeSteal
      }
    },
    setAnimation: (state, action) => {
      const animationOptions = action.payload

      if (animationOptions?.player)
        animationOptions.player?.dodged
          ? (state.animationClass = "player-dodged")
          : (state.animationClass = "player-attack")
      else
        animationOptions.enemy.dodged
          ? (state.animationClass = "enemy-dodged")
          : (state.animationClass = "enemy-attack")

      //todo o hacer un redux de endAnimation o que la animación termine y ya sea invisible
      //state.animationClass = setTimeout(() => "none", 1000)
    },
    endAnimation: state => {
      state.animationClass = "none"
    },
  },
})

export const {
  prepareEnemyToFight,
  preparePlayerToFight,
  attackEnemy,
  setAnimation,
  endAnimation,
} = fightReducer.actions

export default fightReducer.reducer
