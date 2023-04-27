import React, { useEffect, useState } from "react"
import Button from "../Button"
import LuckyButtons from "../LuckyButtons"
import { useDispatch, useSelector } from "react-redux"
import useWheel from "../../context/useWheel"
import {
  attackEnemy,
  endAnimation,
  setAnimation,
} from "../../reducers/fightReducer"
import { addMessage } from "../../reducers/eventReducer"

const FightingButton = () => {
  //Imports
  const { leftHand, rightHand } = useSelector(state => state.player.equipment)
  const { player, enemy } = useSelector(state => state.fight)
  const { handleSpin, configWheel } = useWheel()

  const dispatch = useDispatch()

  //State
  const [isAttacking, setIsAttacking] = useState(false)
  const [selectedAttack, setSelectedAttack] = useState(null)

  //Events
  const attack = attack => {
    setSelectedAttack(attack)
    configWheel(attack.wheelConfig)
  }

  useEffect(() => {
    if (selectedAttack === null) return undefined
    ;(async () => {
      let res = await handleSpin()

      if (res === "fail") dispatch(addMessage(`You failed...`))
      else dispatch(addMessage(`You perfomed a ${res} attack`))

      const attackDodged = Math.random() * 100 < enemy.dodgeProb

      dispatch(setAnimation({ player: { dodged: attackDodged } }))
      setTimeout(() => {
        dispatch(endAnimation())
        if (attackDodged) res = "dodged"

        const attackDamage = selectedAttack.possibleAttacks[res]

        dispatch(attackEnemy({ res, attack: attackDamage }))

        dispatch(
          res !== "dodged"
            ? addMessage(`You did ${attackDamage} damage`)
            : addMessage("The enemy dodged your attack")
        )

        setSelectedAttack(null)
      }, 1000)
    })()
  }, [selectedAttack])

  if (!isAttacking)
    return (
      <>
        <Button text="Attack" onClick={() => setIsAttacking(true)} />
        <Button text="Run" />
        <LuckyButtons text="Lucky Shoot" />
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
