import enemies from "@constants/enemies.json"
import {
	ENEMY_STATS_SCALE,
	EARLY_ENEMY_STATS_SCALE,
	NUMVENTS_FOR_END_EARLY,
} from "@constants/fight"
import { ENEMEY_ATTACK_SCALE, ENEMEY_HEALTH_SCALE } from "../../constants/fight"

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
		const random = Math.random() * stat

		return Math.round(
			random +
				stat *
					numEvents *
					(NUMVENTS_FOR_END_EARLY > numEvents
						? EARLY_ENEMY_STATS_SCALE
						: ENEMY_STATS_SCALE)
		)
	}

	const health = scalability(ENEMEY_HEALTH_SCALE)
	const specialMovesProbs = lucky > 0 ? 15 : 15 + lucky * -1.5

	enemy.fullHealth = health
	enemy.currentHealth = health
	enemy.attack = scalability(ENEMEY_ATTACK_SCALE)
	enemy.critickProb = specialMovesProbs
	enemy.dodge = specialMovesProbs

	return enemy
}

export default getRandomEnemy
