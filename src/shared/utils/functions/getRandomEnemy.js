import enemies from "@config/enemies.json"

/**
 * Generates a random enemy with calculated stats using player stats and numEvents
 *
 * @param {Object} props
 * @param {Object} props.playerStats
 * @param {number} numEvents to reduce enemy strong before 10 events
 *
 * @returns {Object} enemy
 */
function getRandomEnemy({ playerStats, numEvents }) {
	//Imports
	const enemy = Object.assign(
		{},
		enemies[Math.floor(Math.random() * enemies.length)]
	)

	const { trullyKarma, health, armor, lucky } = playerStats

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
	const specialMovesProbs = lucky > 0 ? 15 : 15 + lucky * -1.5
	const attack = health / 7

	enemy.fullHealth = calculatedHealth
	enemy.currentHealth = calculatedHealth
	enemy.armor = calculateStatByKarma(armor)
	enemy.attack = calculateStatByKarma(attack)
	enemy.critickProb = specialMovesProbs
	enemy.dodge = specialMovesProbs

	return enemy
}

export default getRandomEnemy
