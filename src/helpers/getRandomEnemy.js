import enemies from "../config/enemies.json"

/**
 * Generates a random enemy with calculated stats using player stats and numEvents
 *
 * @param {Object} props
 * @param {Object} props.playerStats
 * @param {number} numEvents to reduce enemy strong before 10 events
 *
 * @returns {Object} enemy
 */
export default function getRandomEnemy({ playerStats, numEvents }) {
  //Imports
  const enemy = enemies[Math.floor(Math.random() * enemies.length)]
  const { trullyKarma, health, armor, attack, lucky } = playerStats

  //Functions
  const calculateStatByKarma = valueStat => {
    const reduceByCantEvents = numEvents < 10 ? 0.8 + numEvents * 0.02 : 1

    const maxValue = valueStat * 1.8 * reduceByCantEvents,
      karmaMultiplier = trullyKarma > 0 ? 1 + trullyKarma * 0.05 : 1,
      statMultiplier = valueStat * 0.5

    const calculatedValue =
      maxValue - Math.random() * statMultiplier * karmaMultiplier

    return Math.floor(calculatedValue)
  }

  //Variables
  const calculatedHealth = calculateStatByKarma(health)
  const specialMovesProbs = lucky > 0 ? 25 : 25 + lucky * -1.5

  //Enemy Item
  enemy.fullHealth = calculatedHealth
  enemy.currentHealth = calculatedHealth
  enemy.armor = calculateStatByKarma(armor)
  enemy.attack = calculateStatByKarma(attack)
  enemy.critickProb = specialMovesProbs
  enemy.dodgeProb = specialMovesProbs

  return enemy
}
