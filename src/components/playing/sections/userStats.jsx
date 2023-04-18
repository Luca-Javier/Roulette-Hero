import { useSelector } from "react-redux"
import headImg from "/src/assets/equipment/empty/head.svg"
import handImg from "/src/assets/equipment/empty/hand.svg"
import chestImg from "/src/assets/equipment/empty/chest.svg"
import pantImg from "/src/assets/equipment/empty/pantalones.svg"
import footImg from "/src/assets/equipment/empty/foots.svg"

const UserStats = ({}) => {
  //Imports
  const state = useSelector(state => state.player)
  const { health, armor, attack, karma, lucky } = state.stats

  //Variables
  const headAlt = "head equipment",
    handAlt = "hand equipment",
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
          <img src={headImg} alt={headAlt} />
        </div>
        <div className="flex gap-05">
          <img src={handImg} alt={handAlt} />
          <img src={chestImg} alt={chestAlt} />
          <img src={handImg} alt={handAlt} />
        </div>
        <div className="flex justify-center">
          <img src={pantImg} alt={pantAlt} />
        </div>
        <div className="flex gap-05 justify-center">
          <img src={footImg} alt={footAlt} />
          <img src={footImg} alt={footAlt} />
        </div>
      </article>
    </section>
  )
}
export default UserStats
