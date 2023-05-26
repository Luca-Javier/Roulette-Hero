import enemies from "@constants/enemies.json"

/**
 * Generates a random enemy with calculated stats using numEvents
 *
 * @param {Object} props
 * @param {Object} props.playerStats
 * @param {number} numEvents to reduce enemy strong before 10 events
 *
 * @returns {Object} enemy
 */
function getRandomEnemy({ playerStats, numEvents }) {
	const enemy = Object.assign(
		{},
		enemies[Math.floor(Math.random() * enemies.length)]
	)

	const { lucky } = playerStats

	const scalability = scale => {
		const min = 0.75 * scale * numEvents,
			randomMax = Math.random() * scale * numEvents

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
