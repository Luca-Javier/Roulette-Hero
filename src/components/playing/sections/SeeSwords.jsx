import React from "react"
import { useSelector } from "react-redux"
import ItemInfo from "../../ItemInfo"

const SeeSwords = ({}) => {
  //Imports
  const { leftHand, rightHand } = useSelector(state => state.player.equipment)

  return (
    <section className="flex flex-column between h-100">
      {leftHand && <ItemInfo item={leftHand} />}
      {rightHand && <ItemInfo item={rightHand} />}
    </section>
  )
}
export default SeeSwords
