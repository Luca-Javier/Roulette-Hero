import { EVENT_PROBS } from "../config/eventProbabilities"

const getRandomEvent = () => {
  //todo user trullyKarma y addWeight para alterar probabilidades

  return EVENT_PROBS.peek()[0]
}
export default getRandomEvent
