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
import { addMessage } from "../reducers/eventReducer"
import { EVENT } from "../config/eventsTypes"
import { useNavigate } from "react-router-dom"

function useFight() {
  // Imports
  const { handleSpin, configWheel } = useWheel()
  const { player, enemy, isEnemyAttacking } = useSelector(state => state.fight)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // States
  const [selectedAttack, setSelectedAttack] = useState(null)
  const [isFightDone, setIsFightDone] = useState(false)

  // Events
  const attack = attack => {
    setSelectedAttack(attack)
    configWheel(attack.wheelConfig)
  }

  const walk = () => dispatch(setEvent(EVENT.walking))

  const returnIndex = () => navigate("/")

  //Player Attack
  useEffect(() => {
    if (selectedAttack === null) return undefined
    ;(async () => {
      let res = await handleSpin()

      if (res === "fail") dispatch(addMessage(`You failed...`))
      else dispatch(addMessage(`You perfomed a ${res} attack`))

      const attackDodged = Math.random() * 100 < enemy.dodge

      dispatch(setAnimation({ player: { dodged: attackDodged } }))
      setTimeout(() => {
        dispatch(endAnimation())
        if (attackDodged) res = "dodged"

        const attackDamage = selectedAttack.possibleAttacks[res]

        dispatch(attackEnemy({ res, attackDamage }))

        if (res !== "fail")
          dispatch(
            res !== "dodged"
              ? addMessage(`You did ${attackDamage} damage`)
              : addMessage("The enemy dodged your attack")
          )

        setSelectedAttack(null)
      }, 1000)

      setTimeout(() => {
        configWheel(enemy.wheelConfig)
        dispatch(toggleIsEnemyAttacking())
      }, 2000)
    })()
  }, [selectedAttack])

  //Enemy Attack
  useEffect(() => {
    if (!isEnemyAttacking || enemy.currentHealth === 0) return undefined
    ;(async () => {
      let res = await handleSpin()

      if (res === "fail") dispatch(addMessage(`The enemy failed`))
      else dispatch(addMessage(`The enemy performed a ${res} attack`))

      const attackDodged = Math.random() * 100 < player.dodge

      dispatch(setAnimation({ enemy: { dodged: attackDodged } }))

      setTimeout(() => {
        dispatch(endAnimation())
        if (attackDodged) res = "dodged"

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
              ? addMessage(`The enemy did you ${attackDamage} damage`)
              : addMessage("You dodged the attack")
          )

        dispatch(toggleIsEnemyAttacking())
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

    setIsFightDone(true)
  }, [player.currentHealth, enemy.currentHealth])

  return { isFightDone, attack, player, enemy, walk, returnIndex }
}

export default useFight
