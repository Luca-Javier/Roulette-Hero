/**
 * @file Contains the probabilities for all events
 */

import { EVENT } from "./eventsTypes"
import WeightedList from "js-weighted-list"

const EVENT_PROBS = new WeightedList([
	[EVENT.fight, 2000],
	[EVENT.backFight, 25],
	[EVENT.shop, 25],
	[EVENT.chest, 10],
	[EVENT.getKarma, 10],
	[EVENT.changeKarma, 10],
])

export { EVENT_PROBS }
