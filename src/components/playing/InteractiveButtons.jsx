import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Button"
import { EVENT } from "../../config/eventsTypes"
import {
  addEventNum,
  setEvent,
  setRandomEvent,
} from "../../reducers/eventReducer"
import { getWalkTime } from "../../helpers/getWalkingTime"
import FightingButton from "./FightingButton"

const InteractiveButtons = () => {
  //Imports
  const { event } = useSelector(state => state.event)
  const dispatch = useDispatch()

  //Events
  const walk = () => {
    dispatch(setEvent(EVENT.walking))
  }

  const fight = () => {
    dispatch(setEvent(EVENT.fighting))
  }

  //Effects
  useEffect(() => {
    if (event !== EVENT.walking) return undefined
    dispatch(addEventNum())
    setTimeout(() => dispatch(setRandomEvent()), getWalkTime())
  }, [event])

  return (
    <section className="interactive-buttons">
      {event === EVENT.waiting && <Button text="Walk" onClick={walk} />}
      {event === EVENT.walking && (
        <Button className="walking-animation" text="Walking" disabled />
      )}
      {event === EVENT.fight && <Button text="Fight" onClick={fight} />}
      {event === EVENT.backFight && (
        <>
          {/* //todo must be attack and reduce the enemy health or maybe just a lucky shoot or fight  */}

          <Button text="Fight" onClick={fight} />
          <Button text="Run" />
        </>
      )}

      {event === EVENT.fighting && <FightingButton />}
    </section>
  )
}
export default InteractiveButtons
