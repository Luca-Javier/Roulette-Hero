import { createSlice } from "@reduxjs/toolkit"
import getRandomEnemy from "@helpers/getRandomEnemy"
import getAttackWheelConfig from "@helpers/getAttackWheelConfig"

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
			dodge: null,
			wheelConfig: null,
		},
		player: {
			fullHealth: null,
			currentHealth: null,
			dodge: null,
			leftAttack: { possibleAttacks: null, wheelConfig: null },
			rightAttack: { possibleAttacks: null, wheelConfig: null },
		},
		animationClass: "",
		isEnemyAttacking: false,
	},
	reducers: {
		prepareEnemyToFight: (state, action) => {
			const playerStats = action.payload.playerData.stats,
				numEvents = action.payload.numEvents

			const enemy = getRandomEnemy({ playerStats, numEvents })

			state.enemy = enemy
		},
		preparePlayerToFight: (state, action) => {
			const playerData = action.payload.playerData,
				{ leftHand, rightHand } = playerData.equipment

			if (leftHand) {
				const { possibleAttacks, wheelConfig } = getAttackWheelConfig({
					item: leftHand,
					playerData,
				})

				state.player.leftAttack = { possibleAttacks, wheelConfig }
			}

			if (rightHand) {
				const { possibleAttacks, wheelConfig } = getAttackWheelConfig({
					item: rightHand,
					playerData,
				})

				state.player.rightAttack = { possibleAttacks, wheelConfig }
			}

			const { health, dodge } = playerData.stats

			state.player.fullHealth = health
			state.player.currentHealth = health
			state.player.dodge = dodge
		},
		attackEnemy: (state, action) => {
			const res = action.payload.res,
				attack = action.payload.attackDamage

			if (
				res === "normal" ||
				res === "fail" ||
				res === "critic" ||
				res === "dodged" ||
				res === "kill"
			)
				state.enemy.currentHealth -= attack

			if (res === "lifeSteal") {
				state.enemy.currentHealth -= attack.attack

				const lifeSteal = Math.floor(attack.attack * attack.effect)

				if (state.player.currentHealth + lifeSteal > state.player.fullHealth)
					state.player.currentHealth = state.player.fullHealth
				else state.player.currentHealth += lifeSteal
			}

			if (state.enemy.currentHealth < 0) state.enemy.currentHealth = 0
		},
		setAnimation: (state, action) => {
			state.animationClass = action.payload

			//todo o hacer un redux de endAnimation o que la animación termine y ya sea invisible
			//state.animationClass = setTimeout(() => "none", 1000)
		},
		endAnimation: state => {
			state.animationClass = ""
		},
		toggleIsEnemyAttacking: state => {
			state.isEnemyAttacking = !state.isEnemyAttacking
		},
		doEnemyAttack: (state, action) => {
			const { attackDamage } = action.payload

			state.player.currentHealth -= attackDamage

			if (state.player.currentHealth < 0) state.player.currentHealth = 0
		},
	},
})

export const {
	prepareEnemyToFight,
	preparePlayerToFight,
	attackEnemy,
	setAnimation,
	endAnimation,
	toggleIsEnemyAttacking,
	doEnemyAttack,
} = fightReducer.actions

export default fightReducer.reducer
