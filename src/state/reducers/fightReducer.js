import { createSlice } from "@reduxjs/toolkit"
import getRandomEnemy from "@functions/getRandomEnemy"
import getAttackWheelConfig from "@functions/getAttackWheelConfig"
import { ACTIVE_EFFECTS } from "@constants/items"

const initialState = {
	enemy: {
		src: "",
		fullHealth: null,
		currentHealth: null,
		//armor: null,
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
	isFighting: false,
	animationClass: "",
	isEnemyAttacking: false,
}

const fightReducer = createSlice({
	name: "fight",
	initialState,
	reducers: {
		resetFightStore: state => {
			Object.assign(state, initialState)
		},
		prepareEnemyToFight: (state, action) => {
			const playerStats = action.payload.playerData.stats,
				numEvents = action.payload.numEvents

			const enemy = getRandomEnemy({ playerStats, numEvents })

			state.isFighting = true
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
				res === "kill" ||
				res === ACTIVE_EFFECTS.stoleMoney ||
				res === ACTIVE_EFFECTS.stoleStones
			)
				state.enemy.currentHealth -= attack

			if (res === ACTIVE_EFFECTS.lifeSteal) {
				state.enemy.currentHealth -= attack.attack

				const lifeSteal = Math.floor(attack.attack * attack.effect)

				if (state.player.currentHealth + lifeSteal > state.player.fullHealth)
					state.player.currentHealth = state.player.fullHealth
				else state.player.currentHealth += lifeSteal
			}

			if (
				res === ACTIVE_EFFECTS.strongestAttack ||
				res === ACTIVE_EFFECTS.superCritic
			)
				state.enemy.currentHealth -= attack.attack * attack.effect

			if (state.enemy.currentHealth < 0) state.enemy.currentHealth = 0
		},
		setAnimation: (state, action) => {
			state.animationClass = action.payload
		},
		endAnimation: state => {
			state.animationClass = ""
		},
		toggleIsEnemyAttacking: state => {
			if (state.isFighting) state.isEnemyAttacking = !state.isEnemyAttacking
		},
		doEnemyAttack: (state, action) => {
			const { attackDamage } = action.payload

			state.player.currentHealth -= attackDamage //+ Math.floor(state.player.armor)

			if (state.player.currentHealth < 0) state.player.currentHealth = 0
		},
		/* endFight: state => {
			state.isFighting = false
			state.isEnemyAttacking = false
		}, */
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
	endFight,
	resetFightStore,
} = fightReducer.actions

export default fightReducer.reducer
