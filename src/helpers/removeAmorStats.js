function removeStatsFromArmor({ state, item }) {
  state.stats.health -= item.health
  state.stats.armor -= item.armor

  const effects = item.passiveEffects

  if (effects?.luckyStatMultiplier)
    state.stats.lucky /= 1 + effects.luckyStatMultiplier

  if (effects?.extraArmor) state.stats.armor -= effects.extraArmor
}

export default removeStatsFromArmor
