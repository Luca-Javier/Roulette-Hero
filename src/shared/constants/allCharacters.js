import i18n from "@i18n"
import { i18n_alt } from "@functions/translators"
import { ACTIVE_EFFECTS, ARMOR_EFFECTS, WEAPON_PASSIVE_EFFECTS } from "./items"

const equipmentTemplate = {
	helmet: null,
	leftHand: null,
	chest: null,
	rightHand: null,
	leg: null,
	leftFoot: null,
	rightFoot: null,
}

export default () => {
	const t = i18n.getFixedT(i18n.language, "characters")

	return [
		{
			id: 1,
			description: t("default.description"),
			img: "assets/characters/default.svg",
			className: t("default.name"),
			money: 17,
			stones: 4,
			stats: {
				health: 14,
				armor: 0.2,
				critic: 7,
				dodge: 6,
				lucky: 1,
				karma: 1,
				trullyKarma: 2.3,
			},
			classEffects: {},
			equipment: {
				...equipmentTemplate,
				helmet: {
					id: 3,
					src: "assets/armors/helmets/simple-helmet.svg",
					alt: i18n_alt({
						type: "helmet",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "armor",
					type: "helmet",
					variant: "simple",
					price: 17,
					armor: 0.2,
					health: 3,
					passiveEffects: {},
				},
				leftHand: {
					id: 1,
					src: "assets/weapons/swords/simple-sword.svg",
					alt: i18n_alt({
						type: "sword",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "weapon",
					type: "sword",
					variant: "simple",
					price: 18,
					attack: 3,
					passiveEffects: {},
					activeEffects: {},
				},
			},
		},

		{
			id: 2,
			description: t("knight.description"),
			img: "assets/characters/knight.svg",
			className: t("knight.name"),
			money: 19,
			stones: 4,
			stats: {
				health: 11,
				armor: 0.6,
				critic: 8,
				dodge: 7,
				lucky: 2,
				karma: 1,
				trullyKarma: 2.6,
			},
			classEffects: {},
			equipment: {
				...equipmentTemplate,
				leftHand: {
					id: 1,
					src: "assets/weapons/swords/simple-sword.svg",
					alt: i18n_alt({
						type: "sword",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "weapon",
					type: "sword",
					variant: "simple",
					price: 16,
					attack: 3,
					passiveEffects: {},
					activeEffects: {},
				},
				helmet: {
					id: 2,
					src: "assets/armors/helmets/simple-helmet.svg",
					alt: i18n_alt({
						type: "helmet",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "armor",
					type: "helmet",
					variant: "simple",
					price: 15,
					armor: 0.2,
					health: 3,
					passiveEffects: {},
				},
				chest: {
					id: 3,
					src: "assets/armors/chests/simple-chest.svg",
					alt: i18n_alt({
						type: "chest",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "armor",
					type: "chest",
					variant: "simple",
					price: 17,
					armor: 0.2,
					health: 4,
					passiveEffects: {},
				},
				leg: {
					id: 4,
					src: "assets/armors/legs/simple-leg.svg",
					alt: i18n_alt({ type: "leg", quality: "common", variant: "simple" }),
					quality: "common",
					equipType: "armor",
					type: "leg",
					variant: "simple",
					price: 16,
					armor: 0.2,
					health: 3,
					passiveEffects: {},
				},
			},
		},
		{
			id: 3,
			description: t("hammerBro.description"),
			img: "assets/characters/hammer-bro.svg",
			className: t("hammerBro.name"),
			money: 21,
			stones: 3,
			stats: {
				health: 12,
				armor: 0.2,
				critic: 16,
				dodge: 13,
				lucky: 2,
				karma: 2,
				trullyKarma: 5.2,
			},
			classEffects: {
				extraHammerDamage: 0.2,
			},
			equipment: {
				...equipmentTemplate,
				leftHand: {
					id: 1,
					src: "assets/weapons/hammers/simple-hammer.svg",
					alt: i18n_alt({
						type: "hammer",
						quality: "common",
						variant: "simple",
					}),
					quality: "rare",
					equipType: "weapon",
					type: "hammer",
					variant: "simple",
					price: 14,
					attack: 5,
					passiveEffects: {
						[WEAPON_PASSIVE_EFFECTS.hammerDamageMultiplier]: 0.1,
					},
					activeEffects: {},
				},
				chest: {
					id: 2,
					src: "assets/armors/chests/simple-chest.svg",
					alt: i18n_alt({
						type: "chest",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "armor",
					type: "chest",
					variant: "simple",
					price: 15,
					health: 3,
					armor: 0.2,
					passiveEffects: {},
				},
			},
		},

		{
			id: 97,
			description: t("developer.description"),
			img: "assets/characters/dev.svg",
			className: t("developer.name"),
			money: 2000,
			stones: 2000,
			stats: {
				health: 100,
				armor: 1,
				critic: 25,
				dodge: 15,
				lucky: 2,
				karma: 1,
				trullyKarma: 1.5,
			},
			classEffects: { extraHammerDamage: 0.2 },
			equipment: {
				...equipmentTemplate,
				leftHand: {
					id: 1,
					src: "assets/weapons/hammers/bloody-hammer.svg",
					alt: i18n_alt({
						type: "hammer",
						quality: "common",
						variant: "bloody",
					}),
					quality: "common",
					equipType: "weapon",
					type: "hammer",
					variant: "bloody",
					price: 16,
					attack: 3,
					passiveEffects: {
						[WEAPON_PASSIVE_EFFECTS.hammerDamageMultiplier]: 0.1,
						[WEAPON_PASSIVE_EFFECTS.luckyHitMultiplier]: 0.1,
					},
					activeEffects: {
						[ACTIVE_EFFECTS.lifeSteal]: 0.2,
					},
				},
				rightHand: {
					id: 2,
					src: "assets/weapons/swords/lethal-sword.svg",
					alt: i18n_alt({
						type: "sword",
						quality: "common",
						variant: "lethal",
					}),
					quality: "common",

					equipType: "weapon",
					type: "sword",
					variant: "lethal",
					price: 15,
					attack: 3,
					passiveEffects: {},
					activeEffects: {
						[ACTIVE_EFFECTS.superCritic]: 0.2,
					},
				},
				leg: {
					id: 3,
					src: "assets/armors/legs/simple-leg.svg",
					alt: i18n_alt({ type: "leg", quality: "common", variant: "simple" }),
					quality: "common",
					equipType: "armor",
					type: "leg",
					variant: "simple",
					price: 16,
					armor: 0.2,
					health: 4,
					passiveEffects: {},
				},
				chest: {
					id: 4,
					src: "assets/armors/chests/simple-chest.svg",
					alt: i18n_alt({
						type: "chest",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "armor",
					type: "chest",
					variant: "simple",
					price: 17,
					armor: 0.2,
					health: 4,
					passiveEffects: {},
				},
				leftFoot: {
					id: 5,
					src: "assets/armors/foots/armored-foot.svg",
					alt: i18n_alt({
						type: "foot",
						quality: "rare",
						variant: "armored",
					}),
					quality: "rare",
					equipType: "armor",
					type: "foot",
					variant: "armored",
					price: 46,
					armor: 0.4,
					health: 4,
					passiveEffects: {
						[ARMOR_EFFECTS.extraArmor]: 0.1,
					},
				},
			},
			backpag: [
				{
					id: 6,
					src: "assets/weapons/swords/strong-sword.svg",
					alt: i18n_alt({
						type: "sword",
						quality: "rare",
						variant: "strong",
					}),
					quality: "rare",
					equipType: "weapon",
					type: "sword",
					variant: "strong",
					price: 47,
					attack: 5,
					passiveEffects: {
						[WEAPON_PASSIVE_EFFECTS.luckyHitMultiplier]: 0.1,
					},
					activeEffects: {
						[ACTIVE_EFFECTS.strongestAttack]: 0.2,
					},
				},
				{
					id: 7,
					src: "assets/weapons/sables/strong-sable.svg",
					alt: i18n_alt({
						type: "sable",
						quality: "rare",
						variant: "strong",
					}),
					quality: "rare",
					equipType: "weapon",
					type: "sable",
					variant: "strong",
					price: 47,
					attack: 5,
					passiveEffects: {},
					activeEffects: {
						[ACTIVE_EFFECTS.stoleMoney]: 3,
						[ACTIVE_EFFECTS.strongestAttack]: 0.2,
					},
				},
				{
					id: 8,
					src: "assets/weapons/pickaxes/simple-pickaxe.svg",
					alt: i18n_alt({
						type: "pickaxe",
						quality: "rare",
						variant: "simple",
					}),
					quality: "rare",
					equipType: "weapon",
					type: "pickaxe",
					variant: "simple",
					price: 47,
					attack: 6,
					passiveEffects: {},
					activeEffects: {
						[ACTIVE_EFFECTS.stoleStones]: 1,
					},
				},
				{
					id: 9,
					src: "assets/armors/legs/lucky-leg.svg",
					alt: i18n_alt({ type: "leg", quality: "common", variant: "lucky" }),
					quality: "common",
					equipType: "armor",
					type: "leg",
					variant: "lucky",
					price: 16,
					armor: 0.2,
					health: 4,
					passiveEffects: {
						[ARMOR_EFFECTS.luckyStatMultiplier]: 0.1,
					},
				},
				{
					id: 10,
					src: "assets/armors/foots/lucky-foot.svg",
					alt: i18n_alt({ type: "foot", quality: "common", variant: "lucky" }),
					quality: "rare",
					equipType: "armor",
					type: "foot",
					variant: "lucky",
					price: 16,
					armor: 0.2,
					health: 4,
					passiveEffects: {
						[ARMOR_EFFECTS.luckyStatMultiplier]: 0.4,
					},
				},
			],
		},

		{
			id: 98,
			description: "luckiest",
			img: "assets/characters/default.svg",
			className: "luckiest",
			money: 300,
			stones: 50,
			stats: {
				health: 14,
				armor: 0.2,
				critic: 25,
				dodge: 15,
				lucky: 10,
				karma: 10,
				trullyKarma: 35,
			},
			classEffects: {},
			equipment: {
				...equipmentTemplate,
				helmet: {
					id: 3,
					src: "assets/armors/helmets/simple-helmet.svg",
					alt: i18n_alt({
						type: "helmet",
						quality: "rare",
						variant: "simple",
					}),
					quality: "rare",

					equipType: "armor",
					type: "helmet",
					variant: "simple",
					price: 17,
					armor: 0.2,
					health: 5,
					passiveEffects: {},
				},
				leftHand: {
					id: 1,
					src: "assets/weapons/swords/simple-sword.svg",
					alt: i18n_alt({
						type: "sword",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "weapon",
					type: "sword",
					variant: "simple",
					price: 18,
					attack: 3,
					passiveEffects: {},
					activeEffects: {},
				},
			},
		},
		{
			id: 99,
			description: "UNluckiest",
			img: "assets/characters/default.svg",
			className: "UNluckiest",
			money: 300,
			stones: 50,
			stats: {
				health: 14,
				armor: 0.2,
				critic: 25,
				dodge: 15,
				lucky: -10,
				karma: -10,
				trullyKarma: -35,
			},
			classEffects: {},
			equipment: {
				...equipmentTemplate,
				helmet: {
					id: 3,
					src: "assets/armors/helmets/simple-helmet.svg",
					alt: i18n_alt({
						type: "helmet",
						quality: "rare",
						variant: "simple",
					}),
					quality: "rare",
					equipType: "armor",
					type: "helmet",
					variant: "simple",
					price: 17,
					armor: 0.2,
					health: 5,
					passiveEffects: {},
				},
				leftHand: {
					id: 1,
					src: "assets/weapons/swords/simple-sword.svg",
					alt: i18n_alt({
						type: "sword",
						quality: "common",
						variant: "simple",
					}),
					quality: "common",
					equipType: "weapon",
					type: "sword",
					variant: "simple",
					price: 18,
					attack: 3,
					passiveEffects: {},
					activeEffects: {},
				},
			},
		},
	]
}
