import { ACTIVE_EFFECTS } from "@constants/items"

function getActiveEffectSize({ effectKey }) {
	if (effectKey === ACTIVE_EFFECTS.strongestAttack) return 15

	if (effectKey === ACTIVE_EFFECTS.superCritic) return 9

	if (effectKey === ACTIVE_EFFECTS.lifeSteal) return 15

	if (effectKey === ACTIVE_EFFECTS.stoleMoney) return 15

	if (effectKey === ACTIVE_EFFECTS.stoleStones) return 15
}

export default getActiveEffectSize
