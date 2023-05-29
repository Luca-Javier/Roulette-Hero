import { CRITIC_SCALE } from "../../constants/fight"
import getActiveEffectSize from "./getActiveEffectSize"
import getCustomOptionWheelStyle from "./getCustomOptionWheelStyle"

/**
 * Returns the possible attacks and the wheel config for the item
 *
 * @param {object} item
 * @param {object} playerData
 * @param {object} playerData.classEffect
 * @param {{trueKarma, critic}} playerData.stats
 *
 * @returns { possibleAttacks:object, wheelConfig:object }
 *
 * @example
 * getItemStats({ trullyKarma, item }): [ possibleAttacks, wheelConfig ]
 */
const getAttackWheelConfig = ({ item, playerData }) => {
	const { classEffects } = playerData,
		{ trullyKarma, critic: criticProb } = playerData.stats

	const karmaFromItem = 1 + item.passiveEffects.luckyHitMultiplier || 1,
		attackFromItem = 1 + item.passiveEffects.attackMultiplier || 1,
		attackFromHammerItem = 1 + item.passiveEffects.hammerDamageMultiplier || 1,
		criticFromRapierItem = 1 + item.passiveEffects.rapierCriticMultiplier || 1

	let attackFromClass = 1

	if (classEffects?.extraHammerDamage && item.type === "hammer")
		attackFromClass += classEffects.extraHammerDamage

	const realKarma = trullyKarma * karmaFromItem,
		realAttack = Math.round(
			item.attack * attackFromItem * attackFromHammerItem * attackFromClass
		)

	let allProb = 100

	const getProb = prob => {
		if (!prob) return allProb
		allProb -= Math.round(prob)
		return Math.round(prob)
	}

	const possibleEffectsAttacks = {}

	const activeEffects = Object.keys(item.activeEffects).map(effectKey => {
		const effect = item.activeEffects[effectKey]

		possibleEffectsAttacks[effectKey] = { effect, attack: realAttack }

		const size = getActiveEffectSize({
			effectKey,
			baseDamage: realAttack,
		})

		return {
			option: effectKey,
			optionSize: getProb(size * realKarma),
			style: getCustomOptionWheelStyle({ option: effectKey }),
		}
	})

	//Possible attacks as keys and the damage as values
	const possibleAttacks = {
		normal: Math.round(realAttack),
		critic: Math.round(realAttack * CRITIC_SCALE * criticFromRapierItem),
		fail: 0,
		dodged: 0,
		...possibleEffectsAttacks,
	}

	const wheelConfig = {
		data: [
			{
				option: "critic",
				optionSize: getProb(criticProb * karmaFromItem),
				style: getCustomOptionWheelStyle({ option: "critic" }),
			},
			{
				option: "fail",
				optionSize: getProb(5),
				style: getCustomOptionWheelStyle({ option: "fail" }),
			},
			...activeEffects,

			{
				option: "normal",
				optionSize: getProb(),
				style: getCustomOptionWheelStyle({ option: "normal" }),
			},
		],
		config: {
			width: 110,
			height: 110,
			left: 120,
			top: 99,
			pointerHeight: 50,
		},
	}

	return { possibleAttacks, wheelConfig }
}

export default getAttackWheelConfig
