/**
 * @file Contains the probabilities for all events
 */

import { EVENT } from "./eventsTypes"
import WeightedList from "js-weighted-list"

const EVENT_PROBS = new WeightedList([
  [EVENT.fight, 500],
  [EVENT.backFight, 25],
  [EVENT.shop, 25],
])

export { EVENT_PROBS }
