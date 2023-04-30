import React, { useState } from "react"
import Button from "../Button"
import LuckyButtons from "../LuckyButtons"
import { useSelector } from "react-redux"
import useFight from "../../hooks/useFight"

function FightingButton() {
  //Imports
  const { leftHand, rightHand } = useSelector(state => state.player.equipment)
  const { isFightDone, attack, player, enemy, walk, returnIndex } = useFight()

  //State
  const [isAttacking, setIsAttacking] = useState(false)

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
        {enemy.currentHealth === 0 && <Button text="Walk" onClick={walk} />}
        {player.currentHealth === 0 && (
          <Button text="End" onClick={returnIndex} />
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
