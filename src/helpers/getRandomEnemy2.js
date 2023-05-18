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

	const { lucky } = playerStats

	const scalability = scala => {
		const min = 0.75 * scala * numEvents,
			randomMax = Math.random() * scala * numEvents

		return Math.round(Math.max(min, randomMax))
	}

	const health = scalability(15)
	const specialMovesProbs = lucky > 0 ? 15 : 15 + lucky * -1.5

	enemy.fullHealth = health
	enemy.currentHealth = health
	enemy.armor = scalability(0.1)
	enemy.attack = scalability(3)
	enemy.critickProb = specialMovesProbs
	enemy.dodge = specialMovesProbs

	return enemy
}

export default getRandomEnemy
