/**
 * @file Probabilities for all items
 * @requires module:js-weighted-list
 */

import WeightedList from "js-weighted-list"
import {
	ARMORS,
	WEAPONS,
	WEAPON_VARIANTS,
	ARMOR_VARIANTS,
	QUALITY_ITEMS,
} from "./items"

export const WEAPON_PROBS = new WeightedList([
	[WEAPONS.sword, 20],
	[WEAPONS.hammer, 200],
	[WEAPONS.rapier, 20],
	[WEAPONS.pickaxe, 20],
	[WEAPONS.sable, 20],
])

export const ARMOR_PROBS = new WeightedList([
	[ARMORS.helmet, 2000],
	[ARMORS.chest, 20],
	[ARMORS.legs, 20],
	[ARMORS.foot, 20],
])

export const WEAPON_VARIANT_PROBS = new WeightedList([
	[WEAPON_VARIANTS.simple, 55],
	[WEAPON_VARIANTS.lucky, 22.5],
	[WEAPON_VARIANTS.bloody, 22.5],
	[WEAPON_VARIANTS.lethal, 22.5],
	[WEAPON_VARIANTS.strong, 22.5],
])

export const ARMOR_VARIANT_PROBS = new WeightedList([
	[ARMOR_VARIANTS.simple, 55],
	[ARMOR_VARIANTS.lucky, 22.5],
	[ARMOR_VARIANTS.armored, 22.5],
])

export const QUALITY_ITEM_PROBS = new WeightedList([
	[QUALITY_ITEMS.common, 40],
	[QUALITY_ITEMS.rare, 30],
	[QUALITY_ITEMS.epic, 20],
	[QUALITY_ITEMS.legendary, 10],
])
