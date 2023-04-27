import React from "react"
import { useSelector } from "react-redux"
import WeaponInfo from "../../WeaponInfo"

const SeeSwords = ({}) => {
  //Imports
  const { leftHand, rightHand } = useSelector(state => state.player.equipment)

  return (
    <section className="flex between">
      {leftHand && <WeaponInfo item={leftHand} />}
      {rightHand && <WeaponInfo item={rightHand} />}
    </section>
  )
}
export default SeeSwords
