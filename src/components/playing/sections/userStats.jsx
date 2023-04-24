import React from "react"
import { useSelector } from "react-redux"
import emptyHeadImg from "/src/assets/equipment/empty/head.svg"
import emptyHandImg from "/src/assets/equipment/empty/hand.svg"
import emptyChestImg from "/src/assets/equipment/empty/chest.svg"
import emptyPantImg from "/src/assets/equipment/empty/pantalones.svg"
import emptyFootImg from "/src/assets/equipment/empty/foots.svg"

const UserStats = ({}) => {
  //Imports
  const state = useSelector(state => state.player)
  const { health, armor, attack, karma, lucky } = state.stats,
    { helmet, leftHand, chest, rightHand, pants, leftFoot, rightFoot } =
      state.equipment

  //Variables
  const headAlt = "head equipment",
    leftHandAlt = "hand equipment",
    rightHandAlt = "hand equipment",
    chestAlt = "chestplate",
    pantAlt = "pants equipment",
    footAlt = "foot equipment"

  return (
    <section className="flex between">
      <article>
        <ul className="list-icons">
          <li className="stat-icon health">{health}</li>
          <li className="stat-icon armor">{armor}</li>
          <li className="stat-icon attack">{attack}</li>
          <li className="stat-icon lucky">{lucky}</li>
          <li className="stat-icon karma">{karma}</li>
        </ul>
      </article>
      <article className="stats-equipment-container">
        <div className="flex justify-center">
          <img src={helmet?.src || emptyHeadImg} alt={headAlt} />
        </div>
        <div className="flex gap-05">
          <img src={leftHand?.src || emptyHandImg} alt={leftHandAlt} />
          <img src={chest?.src || emptyChestImg} alt={chestAlt} />
          <img src={rightHand?.src || emptyHandImg} alt={rightHandAlt} />
        </div>
        <div className="flex justify-center">
          <img src={pants?.src || emptyPantImg} alt={pantAlt} />
        </div>
        <div className="flex gap-05 justify-center">
          <img src={leftFoot?.src || emptyFootImg} alt={footAlt} />
          <img src={rightFoot?.src || emptyFootImg} alt={footAlt} />
        </div>
      </article>
    </section>
  )
}
export default UserStats
