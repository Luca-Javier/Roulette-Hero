import updateLuckyStats from "./updateLuckyStats"

/**@typedef {import("../../types/index").PLayerInitialState} PLayerInitialState */
/**@typedef {import("../../types/index").Armor} Armor */

/**
 *
 * @param {object} props
 * @param {PLayerInitialState} props.state
 * @param {Armor} props.item
 *
 */
function removeStatsFromArmor({ state, item }) {
	const armor = (state.stats.armor - item.armor).toFixed(1)

	state.stats.health -= item.health
	state.stats.armor -= armor

	const effects = item.passiveEffects

	if (effects.luckyStatMultiplier) {
		const lastLucky = state.stats.lucky
		const newLucky = +(
			state.stats.lucky /
			(1 + effects.luckyStatMultiplier)
		).toFixed(1)

		state.stats.lucky = newLucky

		updateLuckyStats({ state, lucky: newLucky - lastLucky })
	}

	if (effects.extraArmor) state.stats.armor -= effects.extraArmor
}

export default removeStatsFromArmor
