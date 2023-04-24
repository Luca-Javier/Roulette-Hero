import { EVENT_PROBS } from "../config/eventProbabilities"

/**
 * Generates a random event based on the probabilities of EVENT_PROBS file
 * 
 * @returns {string} event name
 */
const getRandomEvent = () => {
  //todo user trullyKarma y addWeight para alterar probabilidades

  return EVENT_PROBS.peek()[0]
}
export default getRandomEvent
