import React from "react"
import equipIcon from "../../assets/icons/sections/equipment.svg"
import backpackIcon from "../../assets/icons/sections/backpack.svg"
import swordsIcon from "../../assets/icons/sections/swords-section.svg"

/**@typedef {import("./MainInteractiveUI").Sections} Sections */

/**
 *
 * @param {object} props
 * @param {number} props.section Current section
 * @param {function} props.setSection Set new current section
 * @param {Sections} props.sections Enum of sections
 *
 * @returns {JSX.Element}
 */
const SectionsButtons = ({ section, setSection, sections }) => {
  return (
    <article className="interactive-sections">
      <button
        className={section === sections.userStats ? "isActive" : ""}
        onClick={() => setSection(sections.userStats)}
        disabled={section === sections.fighting}>
        <img
          style={{ width: "17px" }}
          src={equipIcon}
          alt="Equipment icon section"
        />
      </button>
      <button
        className={section === sections.backpack ? "isActive" : ""}
        onClick={() => setSection(sections.backpack)}
        disabled={section === sections.fighting}>
        <img
          style={{ width: "15px" }}
          src={backpackIcon}
          alt="Backpack icon section"
        />
      </button>
      {(section === sections.fighting || section === sections.seeSwords) && (
        <>
          <button
            className={section === sections.fighting ? "isActive" : ""}
            onClick={() => setSection(sections.fighting)}>
            <b>VS</b>
          </button>

          <button
            className={section === sections.seeSwords ? "isActive" : ""}
            onClick={() => setSection(sections.seeSwords)}>
            <img
              style={{ width: "17px" }}
              src={swordsIcon}
              alt="Section swords stats"
            />
          </button>
        </>
      )}
    </article>
  )
}
export default SectionsButtons
