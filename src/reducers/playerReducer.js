import { createSlice } from "@reduxjs/toolkit"
import setArmorStats from "@helpers/setArmorStats"
import removeStatsFromArmor from "@helpers/removeAmorStats"
import allCharacter from "@config/characters.json"

const initialState = {
	name: "",
	className: "Default",
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
			src: "/src/assets/armors/helmets/lucky-helmet.svg",
			alt: "a lucky common helmet",
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
			alt: "a simple common sword",
			quality: "common",
			equipKey: "leftHand",
			equipType: "weapon",
			type: "sword",
			alt: "a simple common sword",
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

			state.stats.karma = +(karma + action.payload).toFixed(1)

			const karmaFromLucky = karma * (lucky * 0.25)

			console.log(+(karma + karmaFromLucky).toFixed(1))

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
} = playerReducer.actions

export default playerReducer.reducer
