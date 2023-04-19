import WeightedList from "js-weighted-list"

export const WEAPON_PROBS = new WeightedList([
  ["sword", 20],
  ["hammer", 20],
  ["rapier", 20],
  ["pickaxe", 20],
  ["pirate", 20],
])

export const EQUIPMENT_PROBS = new WeightedList([
  ["helmet", 20],
  ["chest", 20],
  ["legs", 20],
  ["foot", 20],
])

export const EQUIPMENT_VARIANTE_PROBS = new WeightedList([
  ["simple", 55],
  ["lucky", 15],
  ["pike", 15],
  ["armored", 15],
])

export const WEAPONS_VARIANT_PROBS = new WeightedList([
  ["simple", 50],
  ["lucky", 12.5],
  ["bloody", 12.5],
  ["critik", 12.5],
  ["strongest", 12.5],
])

export const QUALITY_ITEM_PROBS = new WeightedList([
  ["common", 40],
  ["rare", 30],
  ["epic", 20],
  ["legendary", 10],
])
