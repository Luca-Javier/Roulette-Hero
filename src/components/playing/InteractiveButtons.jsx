import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Button"
import { EVENT } from "../../config/eventsTypes"
import {
  addEventNum,
  setEvent,
  setRandomEvent,
} from "../../reducers/eventReducer"
import { getWalkTime } from "../../helpers/getWalkingTime"
import LuckyButtons from "../LuckyButtons"
import FightingButton from "./FightingButton"

const InteractiveButtons = () => {
  //Imports
  const { event } = useSelector(state => state.event)
  const dispatch = useDispatch()

  //Events
  const walk = () => {
    dispatch(addEventNum())
    dispatch(setEvent(EVENT.walking))
    setTimeout(() => dispatch(setRandomEvent()), getWalkTime())
  }

  const fight = () => {
    dispatch(setEvent(EVENT.fighting))
  }

  return (
    <section className="interactive-buttons">
      {event === EVENT.waiting && <Button text="Walk" onClick={walk} />}
      {event === EVENT.walking && <Button text="Walk" disabled />}
      {event === EVENT.fight && <Button text="Fight" onClick={fight} />}
      {event === EVENT.backFight && (
        <>
          {
            {
              /* //todo must be attack and reduce the enemy health or maybe just a lucky shoot or fight  */
            }
          }
          <Button text="Fight" onClick={fight} />
          <Button text="Run" />
        </>
      )}

      {event === EVENT.fighting && <FightingButton />}
    </section>
  )
}
export default InteractiveButtons
