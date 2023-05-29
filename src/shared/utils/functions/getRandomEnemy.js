import enemies from "@constants/enemies.json"
import { ENEMY_STATS_SCALE } from "@constants/fight"

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

	const scalability = stat => {
		/* const min = 0.75 * stat * numEvents,
			randomMax = Math.random() * stat * numEvents

		return Math.round(Math.max(min, randomMax)) */

		const random = Math.random() * stat
		return Math.round(stat * numEvents * ENEMY_STATS_SCALE + random)
	}

	const health = scalability(7)
	const specialMovesProbs = lucky > 0 ? 15 : 15 + lucky * -1.5

	enemy.fullHealth = health
	enemy.currentHealth = health
	enemy.attack = scalability(2)
	enemy.critickProb = specialMovesProbs
	enemy.dodge = specialMovesProbs

	console.log({ attack: enemy.attack })
	return enemy
}

export default getRandomEnemy
