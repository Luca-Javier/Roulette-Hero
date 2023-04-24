import React, { useState } from "react"
import Button from "../Button"
import LuckyButtons from "../LuckyButtons"
import { useSelector } from "react-redux"

const FightingButton = () => {
  //Imports
  const { leftHand, rightHand } = useSelector(state => state.player.equipment)

  //State
  const [isAttacking, setIsAttacking] = useState(false)

  //Events
  const attack = () => setIsAttacking(true)

  if (!isAttacking)
    return (
      <>
        <Button text="Attack" onClick={() => setIsAttacking(true)} />
        <Button text="Run" />
      </>
    )

  return (
    <>
      <Button text="1" />
      <Button text="2" />
      <LuckyButtons text="Lucky Shoot" />
    </>
  )
}
export default FightingButton
