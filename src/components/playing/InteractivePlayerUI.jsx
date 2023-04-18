import { useState } from "react"
import UserStats from "./sections/UserStats"
import equipIcon from "../../assets/icons/sections/equipment.svg"
import backpackIcon from "../../assets/icons/sections/backpack.svg"
import Backpag from "./sections/Backpag"

const sections = {
  userStats: 0,
  backpack: 1,
}

const InteractivePlayerUI = () => {
  //States
  const [section, setSection] = useState(sections.userStats)

  //Events

  return (
    <section className="interactive-player-ui">
      <article className="interactive-per-section">
        {section === sections.userStats && <UserStats />}
        {section === sections.backpack && <Backpag />}
      </article>
      <article className="interactive-sections">
        {/* Maybe a component */}
        <div
          className={section === sections.userStats && "isActive"}
          onClick={() => setSection(sections.userStats)}>
          <img
            style={{ width: "17px" }}
            src={equipIcon}
            alt="Equipment icon section"
          />
        </div>
        <div
          className={section === sections.backpack && "isActive"}
          onClick={() => setSection(sections.backpack)}>
          <img
            style={{ width: "15px" }}
            src={backpackIcon}
            alt="Backpack icon section"
          />
        </div>
      </article>
    </section>
  )
}
export default InteractivePlayerUI
