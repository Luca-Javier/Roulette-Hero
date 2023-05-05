/**
 * @file Contains the probabilities for all events
 */

import { EVENT } from "./eventsTypes"
import WeightedList from "js-weighted-list"

const EVENT_PROBS = new WeightedList([
	[EVENT.fight, 20],
	[EVENT.backFight, 25],
	[EVENT.shop, 2500],
	[EVENT.chest, 10],
])

export { EVENT_PROBS }
