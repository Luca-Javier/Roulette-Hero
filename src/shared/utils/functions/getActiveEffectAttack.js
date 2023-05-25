import { ACTIVE_EFFECTS } from "@constants/items"

function getActiveEffectAttack({ effectKey, baseDamage }) {
	if (effectKey === ACTIVE_EFFECTS.strongestAttack)
		return { size: 15, attack: Math.round(baseDamage * 1.5) }

	if (effectKey === ACTIVE_EFFECTS.superCritic)
		return { size: 9, attack: Math.round(baseDamage * 2) }

	if (effectKey === ACTIVE_EFFECTS.lifeSteal)
		return { size: 15, attack: baseDamage }

	if (effectKey === ACTIVE_EFFECTS.stoleMoney)
		return { size: 15, attack: baseDamage }
}

export default getActiveEffectAttack
