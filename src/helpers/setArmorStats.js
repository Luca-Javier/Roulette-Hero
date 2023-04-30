function setArmorStats(state, item) {
  state.stats.health += item.health
  state.stats.armor += item.armor

  const effects = item.passiveEffects

  if (effects?.luckyStatMultiplier)
    state.stats.lucky *= 1 + effects.luckyStatMultiplier
}

export default setArmorStats