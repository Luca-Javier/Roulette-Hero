import { useEffect, useRef } from "react"
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
	endAttackProcess,
	startAttackProcess,
} from "@reducers/fightReducer"
import { addMessage, setEvent } from "@reducers/eventReducer"
import { EVENT } from "@constants/events"
import useReward from "@hooks/useReward"
import { useTranslation } from "react-i18next"
import { ACTIVE_EFFECTS } from "@constants/items"
import { updateMoney, updateStones } from "@reducers/playerReducer"
import { CRITIC_DAMAGE_SCALE, ANIMATION_ATTACKS } from "@constants/fight"
import { GET_WHEEL_LUCKY_SHOOT, GET_WHEEL_RUN } from "@constants/wheelTemplates"

function effects() {
	const { handleSpin, configWheel } = useWheel()
	const { player, enemy, isEnemyAttacking } = useSelector(state => state.fight)
	const { armor } = useSelector(state => state.player.stats)
	const dispatch = useDispatch()
	const { getReward } = useReward()
	const { t } = useTranslation("messages", { keyPrefix: "fight" })
	const { t: t2 } = useTranslation("messages", { keyPrefix: "fight.attacks" })

	const { leftHand, rightHand } = useSelector(state => state.player.equipment)
	const { trullyKarma } = useSelector(state => state.player.stats)

	const [selectedAttack, setSelectedAttack] = useState(null)
	const [isFightDone, setIsFightDone] = useState(false)
	//? Esto se puede reemplzar con isAttacking del state
	const [isDisabled, setIsDisabled] = useState(false)
	const [isRunning, setIsRunning] = useState(false)
	const [isAttacking, setIsAttacking] = useState(false)
	const wasRewarded = useRef(true)

	// Events
	const attack = attack => {
		setIsAttacking(false)
		setSelectedAttack(attack)
		configWheel(attack.wheelConfig)
	}

	const run = () => {
		configWheel(GET_WHEEL_RUN({ trullyKarma }))
		setIsDisabled(true)
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
		configWheel(GET_WHEEL_LUCKY_SHOOT(trullyKarma))
	}

	const oneShot = () => {
		configWheel(enemy.wheelConfig)
		dispatch(setAnimation(ANIMATION_ATTACKS.player.kill))

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

	//Player run
	useEffect(() => {
		if (!isRunning) {
			return undefined
		}
		;(async () => {
			dispatch(startAttackProcess())
			const res = await handleSpin()
			configWheel(enemy.wheelConfig)

			if (res === "run") walk()
			else {
				setTimeout(() => {
					dispatch(toggleIsEnemyAttacking())
				}, 2000)
			}
			setIsRunning(false)
			dispatch(endAttackProcess())
		})()
	}, [isRunning])

	//Player attack
	useEffect(() => {
		if (selectedAttack === null) return undefined

		dispatch(startAttackProcess())
		setIsDisabled(true)
		;(async () => {
			wasRewarded.current = false
			let res = await handleSpin(
				import.meta.env.VITE_SELECTED_ATTACK_FIGHT || undefined
			)
			configWheel(enemy.wheelConfig)

			if (res === "kill") {
				oneShot()
				return undefined
			}

			if (res === "fail") dispatch(addMessage(t("player failed")))
			else dispatch(addMessage(t("player attack", { attack: t2(res) })))

			const attackDodged =
				res !== "fail" ? Math.random() * 100 < enemy.dodge : false

			if (attackDodged) res = "dodged"

			dispatch(setAnimation(ANIMATION_ATTACKS.player[res] || "player-attack"))

			if (import.meta.env.VITE_DEBUG_FIGHT)
				console.log({
					res,
					leftData: player.leftAttack.wheelConfig.data,
					rightData: player.rightAttack.wheelConfig.data,
					player,
					enemy,
				})

			setTimeout(() => {
				dispatch(endAnimation())

				const attackDamage =
					typeof selectedAttack.possibleAttacks[res] !== "object"
						? selectedAttack.possibleAttacks[res]
						: selectedAttack.possibleAttacks[res].attack

				dispatch(attackEnemy({ res, attackDamage }))

				if (res !== "fail")
					dispatch(
						res !== "dodged"
							? addMessage(t("player attack damage", { damage: attackDamage }))
							: addMessage(t("enemy dodged"))
					)

				if (res === ACTIVE_EFFECTS.stoleMoney) {
					const money = selectedAttack.possibleAttacks[res].effect

					dispatch(addMessage(t("stole money", { money })))
					dispatch(updateMoney(money))
				}

				if (res === ACTIVE_EFFECTS.stoleStones) {
					const stones = selectedAttack.possibleAttacks[res].effect

					dispatch(addMessage(t("stole stones", { stones })))
					dispatch(updateStones(stones))
				}

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
			else dispatch(addMessage(t("enemy attack", { attack: t2(res) })))

			const attackDodged =
				res !== "fail" ? Math.random() * 100 < player.dodge : false

			if (attackDodged) res = "dodged"

			dispatch(setAnimation(ANIMATION_ATTACKS.enemy[res] || "enemy-attack"))

			setTimeout(() => {
				dispatch(endAnimation())

				const playerDefense = Math.floor(armor)

				const possibleAttacks = {
					normal: Math.round(enemy.attack - playerDefense),
					critic: Math.round(
						enemy.attack * CRITIC_DAMAGE_SCALE - playerDefense
					),
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

				dispatch(endAttackProcess())
				dispatch(toggleIsEnemyAttacking())
				setIsDisabled(false)
			}, 1000)
		})()
	}, [isEnemyAttacking])

	//End fight
	useEffect(() => {
		if (player.currentHealth === 0) dispatch(addMessage(t("die")))
		else if (enemy.currentHealth === 0) {
			if (!wasRewarded.current) {
				getReward()
				dispatch(addMessage(t("win")))
			}
		} else return undefined

		dispatch(endAttackProcess())
		setIsDisabled(false)
		setIsFightDone(true)
	}, [player.currentHealth, enemy.currentHealth])

	return {
		isFightDone,
		attack,
		player,
		enemy,
		walk,
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
