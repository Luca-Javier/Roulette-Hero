import { createSlice } from "@reduxjs/toolkit"
import setArmorStats from "@functions/setArmorStats"
import removeStatsFromArmor from "@functions/removeAmorStats"
import allCharacter from "@constants/characters"
import i18n from "@i18n"
import { i18n_alt } from "@functions/translators"

const t = i18n.getFixedT(i18n.language, "characters", "default")

const initialState = {
	name: "name",
	className: t("name"),
	money: 22,
	stones: 2,
	stats: {
		health: 16,
		armor: 1.2,
		critic: 25,
		dodge: 15,
		lucky: 1,
		karma: 0.5,
		trullyKarma: 0.5,
	},
	classEffects: {},
	equipment: {
		helmet: {
			id: 3,
			src: "/src/assets/armors/helmets/simple-helmet.svg",
			alt: i18n_alt({ type: "helmet", quality: "common", variant: "simple" }),
			quality: "common",
			equipKey: "helmet",
			equipType: "armor",
			type: "helmet",
			armor: 0.2,
			health: 2,
			passiveEffects: {},
		},
		leftHand: {
			id: 1,
			src: "/src/assets/weapons/swords/simple-sword.svg",
			alt: i18n_alt({ type: "sword", quality: "common", variant: "simple" }),
			quality: "common",
			equipKey: "leftHand",
			equipType: "weapon",
			type: "sword",
			attack: 3,
			passiveEffects: {},
			activeEffects: {},
		},
		chest: null,
		rightHand: null,
		legs: null,
		leftFoot: null,
		rightFoot: null,
	},
	backpag: [],
}

const playerReducer = createSlice({
	name: "player",
	initialState,
	reducers: {
		resetPlayerStore: state => {
			const characterInitialState = allCharacter.find(
				character => character.name == state.className
			)

			if (!characterInitialState.backpag) characterInitialState.backpag = []

			Object.assign(state, characterInitialState)
		},
		setName: (state, action) => {
			state.name = action.payload
		},

		setInitialCharacterStats: (state, action) => {
			const { name, stats, money, stones, items, classEffects, backpag } =
				action.payload

			state.className = name
			state.money = money
			state.stones = stones
			state.classEffects = classEffects
			state.stats = stats

			if (backpag) state.backpag = backpag

			items.forEach(item => {
				state.equipment[item.equipKey] = item

				if (item.equipType == "armor") setArmorStats({ state, item })
			})
		},

		addBackpag: (state, action) => {
			const { item } = action.payload

			if (item) state.backpag.push(item)
		},

		removeBackpag: (state, action) => {
			const { item } = action.payload

			const backpagWihtoutItem = state.backpag.filter(
				backpagItem => backpagItem.id !== item.id
			)

			state.backpag = backpagWihtoutItem
		},

		updateStatsFromArmor: (state, action) => {
			const { item, oldItem } = action.payload

			if (oldItem) removeStatsFromArmor({ state, item: oldItem })

			if (item) setArmorStats({ state, item })
		},

		replaceItem: (state, action) => {
			const { newItem } = action.payload

			let found = false

			Object.keys(state.equipment).forEach(key => {
				if (state.equipment[key]?.id !== newItem.id) return

				console.log(key)

				if (newItem.equipType == "armor") {
					removeStatsFromArmor({ state, item: state.equipment[key] })
					setArmorStats({ state, item: newItem })
				}

				found = true
				state.equipment[key] = newItem
			})

			if (found) return

			const newItemIndex = state.backpag.findIndex(
				item => item.id === newItem.id
			)

			state.backpag[newItemIndex] = newItem
		},

		equipItem: (state, action) => {
			const { item } = action.payload

			state.equipment[item.equipKey || item.type] = item
		},

		updateMoney: (state, action) => {
			state.money += action.payload
		},

		updateStones: (state, action) => {
			state.stones += action.payload
		},

		updateKarma: (state, action) => {
			const karma = state.stats.karma,
				lucky = state.stats.lucky

			const newKarma = +(karma + action.payload).toFixed(1)

			state.stats.karma = newKarma

			const karmaFromLucky = newKarma * (lucky * 0.25)

			state.stats.trullyKarma = newKarma + karmaFromLucky
		},
		updateLucky: (state, action) => {
			const karma = state.stats.karma,
				lucky = state.stats.lucky

			const newLucky = +(lucky + action.payload).toFixed(1)

			state.stats.lucky = newLucky

			const karmaFromLucky = karma * (newLucky * 0.25)

			state.stats.trullyKarma = karma + karmaFromLucky
		},
	},
})

export const {
	setName,
	setInitialCharacterStats,
	addBackpag,
	removeBackpag,
	equipItem,
	updateStatsFromArmor,
	updateMoney,
	updateStones,
	replaceItem,
	updateKarma,
	resetPlayerStore,
	updateLucky,
} = playerReducer.actions

export default playerReducer.reducer
