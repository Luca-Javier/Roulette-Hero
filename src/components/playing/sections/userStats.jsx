import React from "react"
import { useSelector } from "react-redux"
import emptyHeadImg from "/src/assets/armor/empty/head.svg"
import emptyHandImg from "/src/assets/armor/empty/hand.svg"
import emptyChestImg from "/src/assets/armor/empty/chest.svg"
import emptyPantImg from "/src/assets/armor/empty/pantalones.svg"
import emptyFootImg from "/src/assets/armor/empty/foots.svg"

const UserStats = ({}) => {
  //Imports
  const state = useSelector(state => state.player)
  const { health, armor, critic, dodge, karma, lucky } = state.stats,
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
          <li className="stat-icon critic">{critic}</li>
          <li className="stat-icon dodge">{dodge}</li>
          <li className="stat-icon lucky">{lucky}</li>
          <li className="stat-icon karma">{karma}</li>
        </ul>
      </article>
      <article className="stats-equipment-container">
        <div className="flex justify-center">
          <img
            src={helmet?.src || emptyHeadImg}
            alt={headAlt}
            className={`quality ${helmet?.quality || ""}`}
          />
        </div>
        <div className="flex gap-05">
          <img
            src={leftHand?.src || emptyHandImg}
            alt={leftHandAlt}
            className={`quality ${leftHand?.quality || ""}`}
          />
          <img
            src={chest?.src || emptyChestImg}
            alt={chestAlt}
            className={`quality ${chest?.quality || ""}`}
          />
          <img
            src={rightHand?.src || emptyHandImg}
            alt={rightHandAlt}
            className={`quality ${rightHand?.quality || ""}`}
          />
        </div>
        <div className="flex justify-center">
          <img
            src={pants?.src || emptyPantImg}
            alt={pantAlt}
            className={`quality ${pants?.quality || ""}`}
          />
        </div>
        <div className="flex gap-05 justify-center">
          <img
            src={leftFoot?.src || emptyFootImg}
            alt={footAlt}
            className={`quality ${leftFoot?.quality || ""}`}
          />
          <img
            src={rightFoot?.src || emptyFootImg}
            alt={footAlt}
            className={`quality ${rightFoot?.quality || ""}`}
          />
        </div>
      </article>
    </section>
  )
}
export default UserStats
