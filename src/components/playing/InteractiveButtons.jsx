import { useDispatch, useSelector } from "react-redux"
import Button from "../Button"
import { EVENT } from "../../config/eventsTypes"
import { setEvent, setRandomEvent } from "../../reducers/eventReducer"
import getRandomEvent from "../../helpers/getRandomEvent"

const InteractiveButtons = ({}) => {
  //Imports
  const { event, walkTime } = useSelector(state => state.event)
  const dispatch = useDispatch()

  //Events
  const walk = () => {
    dispatch(setEvent(EVENT.walking))
    setTimeout(() => dispatch(setRandomEvent()), walkTime)
  }

  return (
    <section className="interactive-buttons">
      {event === EVENT.waiting && <Button text="Walk" onClick={walk} />}
      {event === EVENT.walking && <Button text="Walk" disabled />}
      {event === EVENT.fight && <Button text="Fight" />}
    </section>
  )
}
export default InteractiveButtons
