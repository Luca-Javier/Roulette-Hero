import React, { useEffect } from "react"
import { useState } from "react"
import UserStats from "./sections/UserStats"
import Backpag from "./sections/Backpag"
import SectionsButtons from "./SectionsButtons"
import Fightin from "./displayEvents/Fightin"
import { useDispatch, useSelector } from "react-redux"
import SeeSwords from "./sections/seeSwords"
import { EVENT } from "../../config/eventsTypes"
import { cleanChat } from "../../reducers/eventReducer"

/**
 *  Enum of sections for know the current section
 *
 * @typedef {object} Sections
 *
 * @property {number} userStats
 * @property {number} backpack
 * @property {number} fighting
 * @property {number} seeSwords
 */

/**@type {Sections} */
const sections = {
  userStats: 0,
  backpack: 1,
  fighting: 2,
  seeSwords: 3,
}
// jajajaj

const MainInteractiveUI = () => {
  //Imports
  const { event } = useSelector(state => state.event)
  const dispatch = useDispatch()

  //States
  const [section, setSection] = useState(sections.userStats)

  //Effects
  useEffect(() => {
    if (event === EVENT.walking) dispatch(cleanChat())
    else if (event === EVENT.fighting) setSection(sections.fighting)
    else if (
      event === EVENT.walking &&
      (section === sections.fighting || section === sections.seeSwords)
    )
      setSection(sections.userStats)
  }, [event])

  return (
    <section className="main-interactive-ui">
      <article className="interactive-per-section">
        {section === sections.userStats && <UserStats />}
        {section === sections.backpack && <Backpag />}
        {section === sections.fighting && <Fightin setSection={setSection} />}
        {section === sections.seeSwords && <SeeSwords />}
      </article>
      <SectionsButtons
        section={section}
        setSection={setSection}
        sections={sections}
      />
    </section>
  )
}
export default MainInteractiveUI
