function getActiveEffectAttack({ effectKey, baseDamage }) {
	if (effectKey === "strongestAttack")
		return { size: 15, attack: Math.round(baseDamage * 1.5) }

	if (effectKey === "superCritic")
		return { size: 9, attack: Math.round(baseDamage * 2) }

	if (effectKey === "lifeSteal") return { size: 15, attack: baseDamage }
}

export default getActiveEffectAttack
