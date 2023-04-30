import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Button"
import { EVENT } from "../../config/eventsTypes"
import { setEvent } from "../../reducers/eventReducer"
import FightingButton from "./FightingButton"
import { addMessage } from "../../reducers/eventReducer"
import generateWeapon from "../../helpers/generateWeapon"
import { addBackpag } from "../../reducers/playerReducer"

const InteractiveButtons = () => {
  //Imports
  const { event } = useSelector(state => state.event)
  const { trullyKarma } = useSelector(state => state.player.stats)
  const dispatch = useDispatch()

  //Events
  const walk = () => {
    dispatch(setEvent(EVENT.walking))
  }

  const fight = () => {
    dispatch(setEvent(EVENT.fighting))
  }

  const openChest = () => {
    const randomItem = generateWeapon({ trullyKarma })

    dispatch(addBackpag({ item: randomItem }))

    dispatch(addMessage(`It is a ${randomItem.type}`))

    dispatch(setEvent(EVENT.waiting))
  }

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
      {event === EVENT.chest && (
        <Button text="Open Chest" onClick={openChest} />
      )}
    </section>
  )
}
export default InteractiveButtons
