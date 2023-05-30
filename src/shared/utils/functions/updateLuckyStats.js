/**@typedef {import("../../types/index.ts").PLayerInitialState} PLayerInitialState */

import {
	CRITIC_PROB_SCALE_BY_TRULLYKARMA,
	DODGE_PROB_BY_TRULLYKARMA,
	KARMA_FOR_TRULLYKARMA,
	LUCKY_FOR_TRULLYKARMA,
} from "@constants/luckyScale.js"

/**
 *
 * @param {Object} props
 * @param {PLayerInitialState} props.state
 */
function updateLuckyStats({ state, karma, lucky }) {
	let karmaOutdated = state.stats.karma,
		karmaFromLucky,
		isMinor

	//Obtener karmaFromLucky, isMinor, actualizar karma y actualizar estadisticas
	if (lucky) {
		const newLucky = +(state.stats.lucky + lucky).toFixed(1)

		state.stats.lucky = newLucky

		karmaFromLucky =
			karmaOutdated *
			(newLucky * LUCKY_FOR_TRULLYKARMA) *
			(karmaOutdated < 0 && newLucky < 0 ? -1 : 1)

		isMinor = state.stats.lucky > newLucky
	} else {
		const newKarma = +(karmaOutdated + karma).toFixed(1),
			stateLucky = state.stats.lucky

		state.stats.karma = newKarma
		karmaOutdated = newKarma

		karmaFromLucky =
			newKarma *
			(stateLucky * LUCKY_FOR_TRULLYKARMA) *
			(stateLucky < 0 && newKarma < 0 ? -1 : 1)

		isMinor = state.stats.karma > newKarma
	}

	const lastCriticProb = Math.round(
		state.stats.trullyKarma * CRITIC_PROB_SCALE_BY_TRULLYKARMA
	)

	state.stats.critic -= lastCriticProb

	state.stats.trullyKarma =
		karmaOutdated * KARMA_FOR_TRULLYKARMA + karmaFromLucky

	const newCriticProb = Math.round(
		state.stats.trullyKarma * CRITIC_PROB_SCALE_BY_TRULLYKARMA
	)

	state.stats.critic += isMinor ? -newCriticProb : newCriticProb

	state.stats.dodge = Math.round(
		state.stats.trullyKarma * DODGE_PROB_BY_TRULLYKARMA
	)

	if (state.stats.dodge < 1) state.stats.dodge = 1
	if (state.stats.critic < 1) state.stats.critic = 1
}

export default updateLuckyStats
