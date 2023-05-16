import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useWheel from "../context/useWheel"
import { useState } from "react"
import {
	attackEnemy,
	doEnemyAttack,
	endAnimation,
	setAnimation,
	toggleIsEnemyAttacking,
} from "../reducers/fightReducer"
import { addMessage, setEvent } from "../reducers/eventReducer"
import { EVENT } from "../config/eventsTypes"
import { useNavigate } from "react-router-dom"
import { WHEEL_LUCKY_SHOOT } from "../config/wheelTemplates"

const animationAttacks = {
	player: {
		normal: "player-attack",
		critic: "player-attack",
		dodged: "player-dodged",
		fail: "player-fail",
		kill: "one-shot",
	},
	enemy: {
		normal: "enemy-attack",
		critic: "enemy-attack",
		dodged: "enemy-dodged",
		fail: "enemy-fail",
	},
}

function useFight() {
	// Imports
	const { handleSpin, configWheel } = useWheel()
	const { player, enemy, isEnemyAttacking } = useSelector(state => state.fight)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	// States
	const [selectedAttack, setSelectedAttack] = useState(null)
	const [isFightDone, setIsFightDone] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)

	// Events
	const attack = attack => {
		setSelectedAttack(attack)
		configWheel(attack.wheelConfig)
	}

	const luckyAttack = attacks => {
		// Pones possibles attacks en selctedAttack

		const attack =
			attacks.lenght > 1 ? attacks[Math.round(Math.random())] : attacks[0]

		const { normal } = attack.possibleAttacks

		const possibleAttacks = {
			//kill: 9999,
			normal: normal,
			fail: 0,
			dodged: 0,
		}

		setSelectedAttack({ ...attack, ...possibleAttacks })
		configWheel(WHEEL_LUCKY_SHOOT)
	}

	const oneShot = () => {
		configWheel(enemy.wheelConfig)
		dispatch(setAnimation(animationAttacks.player.kill))

		setTimeout(() => {
			dispatch(endAnimation())
			dispatch(
				addMessage(`<b class='color-lucky'>YOU ONE SHOTED THE ENEMY!!</b>`)
			)
			dispatch(attackEnemy({ res: "kill", attackDamage: 9999 }))

			setSelectedAttack(null)
		}, 1000)

		setTimeout(() => {
			dispatch(toggleIsEnemyAttacking())
		}, 2000)
	}

	const walk = () => dispatch(setEvent(EVENT.walking))

	const returnIndex = () => navigate("/")

	//Player Attack
	useEffect(() => {
		if (selectedAttack === null) return undefined

		setIsDisabled(true)
		;(async () => {
			let res = await handleSpin()
			configWheel(enemy.wheelConfig)

			if (res === "kill") {
				oneShot()

				return undefined
			}

			if (res === "fail")
				dispatch(addMessage(`You <b class='color-wrong'>failed</b>...`))
			else dispatch(addMessage(`You perfomed a ${res} attack`))

			const attackDodged =
				res !== "fail" ? Math.random() * 100 < enemy.dodge : false

			if (attackDodged) res = "dodged"

			dispatch(setAnimation(animationAttacks.player[res]))
			setTimeout(() => {
				dispatch(endAnimation())

				const attackDamage = selectedAttack.possibleAttacks[res]

				dispatch(attackEnemy({ res, attackDamage }))

				if (res !== "fail")
					dispatch(
						res !== "dodged"
							? addMessage(
									`You did <b class='color-good'>${attackDamage}</b> damage`
							  )
							: addMessage(
									"The enemy <b class='color-wrong'>dodged</b> your attack"
							  )
					)

				setSelectedAttack(null)
			}, 1000)

			setTimeout(() => {
				dispatch(toggleIsEnemyAttacking())
			}, 2000)
		})()
	}, [selectedAttack])

	//Enemy Attack
	useEffect(() => {
		if (!isEnemyAttacking || enemy.currentHealth === 0) return undefined
		;(async () => {
			let res = await handleSpin()

			console.log({ res })

			if (res === "fail")
				dispatch(addMessage(`The enemy <b class='color-good'>failed</b>`))
			else dispatch(addMessage(`The enemy performed a ${res} attack`))

			const attackDodged =
				res !== "fail" ? Math.random() * 100 < player.dodge : false

			if (attackDodged) res = "dodged"

			dispatch(setAnimation(animationAttacks.enemy[res]))

			setTimeout(() => {
				dispatch(endAnimation())

				const possibleAttacks = {
					normal: enemy.attack,
					critic: enemy.attack * 2,
					fail: 0,
					dodged: 0,
				}

				const attackDamage = possibleAttacks[res]

				dispatch(doEnemyAttack({ attackDamage }))

				if (res !== "fail")
					dispatch(
						res !== "dodged"
							? addMessage(
									`The enemy did you <b class="color-wrong">${attackDamage}</b> damage`
							  )
							: addMessage("You dodged the attack")
					)

				dispatch(toggleIsEnemyAttacking())
				setIsDisabled(false)
			}, 1000)
		})()
	}, [isEnemyAttacking])

	//End fight
	useEffect(() => {
		if (player.currentHealth === 0) {
			dispatch(addMessage("You died..."))
		} else if (enemy.currentHealth === 0) {
			dispatch(addMessage("You win"))
		} else return undefined

		setIsDisabled(false)
		setIsFightDone(true)
	}, [player.currentHealth, enemy.currentHealth])

	return {
		isFightDone,
		attack,
		player,
		enemy,
		walk,
		returnIndex,
		luckyAttack,
		isDisabled,
	}
}

export default useFight
