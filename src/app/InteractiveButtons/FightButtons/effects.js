import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useWheel from "@contexts/useWheel"
import { useState } from "react"
import {
	attackEnemy,
	doEnemyAttack,
	endAnimation,
	resetFightStore,
	setAnimation,
	toggleIsEnemyAttacking,
} from "@reducers/fightReducer"
import { addMessage, setEvent } from "@reducers/eventReducer"
import { EVENT } from "@constants/events"
import { useNavigate } from "react-router-dom"
import { WHEEL_LUCKY_SHOOT, WHEEL_RUN } from "@constants/wheelTemplates"
import useReward from "@hooks/useReward"
import { useTranslation } from "react-i18next"

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

//💀💀💀💀💀💀
function effects() {
	// Imports
	const { handleSpin, configWheel } = useWheel()
	const { player, enemy, isEnemyAttacking } = useSelector(state => state.fight)
	const { armor } = useSelector(state => state.player.stats)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { getReward } = useReward()
	const { t } = useTranslation("messages", { keyPrefix: "fight" })
	const { leftHand, rightHand } = useSelector(state => state.player.equipment)

	// States
	const [selectedAttack, setSelectedAttack] = useState(null)
	const [isFightDone, setIsFightDone] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	const [isRunning, setIsRunning] = useState(false)
	const [isAttacking, setIsAttacking] = useState(false)

	// Events

	const attack = attack => {
		setIsAttacking(false)
		setSelectedAttack(attack)
		configWheel(attack.wheelConfig)
	}

	const run = () => {
		configWheel(WHEEL_RUN)
		setIsRunning(true)
	}

	const luckyAttack = attacks => {
		const attack =
			attacks.lenght > 1 ? attacks[Math.round(Math.random())] : attacks[0]

		const { normal } = attack.possibleAttacks

		const possibleAttacks = {
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
			dispatch(addMessage(t("one shot")))
			dispatch(attackEnemy({ res: "kill", attackDamage: 9999 }))

			setSelectedAttack(null)
		}, 1000)

		setTimeout(() => {
			dispatch(toggleIsEnemyAttacking())
		}, 2000)
	}

	const walk = () => {
		dispatch(resetFightStore())
		dispatch(setEvent(EVENT.walking))

		//To secure overwritting other timeouts
		setTimeout(() => {
			dispatch(resetFightStore())
		}, 2000)
	}

	const returnIndex = () => navigate("/")

	useEffect(() => {
		if (!isRunning) return undefined
		;(async () => {
			const res = await handleSpin()
			configWheel(enemy.wheelConfig)

			if (res === "run") walk()
			else {
				setTimeout(() => {
					dispatch(toggleIsEnemyAttacking())
				}, 2000)
			}
			setIsRunning(false)
		})()
	}, [isRunning])

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

			if (res === "fail") dispatch(addMessage(t("player failed")))
			else dispatch(addMessage(t("player attack", { attack: res })))

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
							? addMessage(t("player attack damage", { damage: attackDamage }))
							: addMessage(t("enemy dodged"))
					)

				//? no hace falta
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

			if (res === "fail") dispatch(addMessage(t("enemy failed")))
			else dispatch(addMessage(t("enemy attack", { attack: res })))

			const attackDodged =
				res !== "fail" ? Math.random() * 100 < player.dodge : false

			if (attackDodged) res = "dodged"

			dispatch(setAnimation(animationAttacks.enemy[res]))

			setTimeout(() => {
				dispatch(endAnimation())

				const playerDefense = Math.floor(armor)

				const possibleAttacks = {
					normal: enemy.attack - playerDefense,
					critic: enemy.attack * 2 - playerDefense,
					fail: 0,
					dodged: 0,
				}

				const attackDamage = possibleAttacks[res]

				dispatch(doEnemyAttack({ attackDamage }))

				if (res !== "fail")
					dispatch(
						res !== "dodged"
							? addMessage(t("enemy attack damage", { damage: attackDamage }))
							: addMessage(t("player dodged"))
					)

				dispatch(toggleIsEnemyAttacking())
				setIsDisabled(false)
			}, 1000)
		})()
	}, [isEnemyAttacking])

	//End fight
	useEffect(() => {
		if (player.currentHealth === 0) dispatch(addMessage(t("die")))
		else if (enemy.currentHealth === 0) {
			dispatch(addMessage(t("win")))
			getReward()
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
		run,
		leftHand,
		rightHand,
		t: useTranslation("buttons").t,
		isAttacking,
		setIsAttacking,
	}
}

export default effects
