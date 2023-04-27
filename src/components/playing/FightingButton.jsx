import React, { useEffect, useState } from "react"
import Button from "../Button"
import LuckyButtons from "../LuckyButtons"
import { useDispatch, useSelector } from "react-redux"
import useWheel from "../../context/useWheel"
import {
  attackEnemy,
  doEnemyAttack,
  endAnimation,
  setAnimation,
  toggleIsEnemyAttacking,
} from "../../reducers/fightReducer"
import { addMessage, setEvent } from "../../reducers/eventReducer"
import { EVENT } from "../../config/eventsTypes"
import { useNavigate } from "react-router-dom"

const FightingButton = () => {
  //Imports
  const { leftHand, rightHand } = useSelector(state => state.player.equipment)
  const { player, enemy, isEnemyAttacking } = useSelector(state => state.fight)
  const { handleSpin, configWheel } = useWheel()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //State
  const [isAttacking, setIsAttacking] = useState(false)
  const [selectedAttack, setSelectedAttack] = useState(null)
  const [isFightDone, setIsFightDone] = useState(false)

  //Events
  const attack = attack => {
    setSelectedAttack(attack)
    configWheel(attack.wheelConfig)
  }

  //Attacks Effects

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

  if (!isAttacking)
    return (
      <>
        <Button text="Attack" onClick={() => setIsAttacking(true)} />
        <Button text="Run" />
        <LuckyButtons text="Lucky Shoot" />
      </>
    )

  if (isFightDone)
    return (
      <>
        {enemy.currentHealth === 0 && (
          <Button
            text="Walk"
            onClick={() => dispatch(setEvent(EVENT.walking))}
          />
        )}
        {player.currentHealth === 0 && (
          <Button text="End" onClick={() => navigate("/")} />
        )}
      </>
    )

  return (
    <>
      <Button text="<-" onClick={() => setIsAttacking(false)} />
      {leftHand?.src && (
        <Button onClick={() => attack(player.leftAttack)}>
          <div className="h-100 w-100 flex justify-center">
            <img
              className={`quality ${leftHand.quality}`}
              style={{ width: "20px" }}
              src={leftHand.src}
              alt="Left Sword"
            />
          </div>
        </Button>
      )}
      {rightHand?.src && (
        <Button onClick={() => attack(player.rightAttack)}>
          <div className="h-100 w-100 flex justify-center">
            <img
              className={`quality ${rightHand.quality}`}
              style={{ width: "20px" }}
              src={rightHand.src}
              alt="Right Sword"
            />
          </div>
        </Button>
      )}
    </>
  )
}
export default FightingButton
