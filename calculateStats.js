import {
	CRITIC_PROB_SCALE_BY_TRULLYKARMA,
	DODGE_PROB_BY_TRULLYKARMA,
	KARMA_FOR_TRULLYKARMA,
	LUCKY_FOR_TRULLYKARMA,
} from "./src/shared/constants/luckyScale.js"

const LUCKY = parseFloat(process.argv[2])
const KARMA = parseFloat(process.argv[3])

function calculate(lucky, karma) {
	const karmaFromLucky =
		karma * (lucky * LUCKY_FOR_TRULLYKARMA) * (karma < 0 && lucky < 0 ? -1 : 1)

	const trullyKarma = karma * KARMA_FOR_TRULLYKARMA + karmaFromLucky

	const dodge = Math.round(trullyKarma * DODGE_PROB_BY_TRULLYKARMA)

	const critic = Math.round(trullyKarma * CRITIC_PROB_SCALE_BY_TRULLYKARMA)

	return {
		lucky,
		karma,
		trullyKarma,
		dodge: dodge > 0 ? dodge : 1,
		critic: critic > 0 ? critic : 1,
	}
}

console.log(calculate(LUCKY, KARMA))
