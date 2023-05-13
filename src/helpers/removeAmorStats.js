function removeStatsFromArmor({ state, item }) {
	const armor = Math.round(state.stats.armor - item.armor)

	state.stats.health -= item.health
	state.stats.armor = armor

	const effects = item.passiveEffects

	if (effects.luckyStatMultiplier) {
		const lucky = Math.round(
			state.stats.lucky / (1 + effects.luckyStatMultiplier)
		)
		state.stats.lucky = lucky
	}

	if (effects.extraArmor) state.stats.armor -= effects.extraArmor
}

export default removeStatsFromArmor
