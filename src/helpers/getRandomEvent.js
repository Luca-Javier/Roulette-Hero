import WeightedList from "js-weighted-list"
import { EVENT_PROBS } from "../config/eventProbabilities"

const getRandomEvent = () => {
  //todo user trullyKarma y addWeight para alterar probabilidades
  const probabilityList = new WeightedList(EVENT_PROBS)

  return probabilityList.peek()[0]
}
export default getRandomEvent
