import { createSlice } from "@reduxjs/toolkit"
import setArmorStats from "@helpers/setArmorStats"
import removeStatsFromArmor from "@helpers/removeAmorStats"

const playerReducer = createSlice({
	name: "player",
	initialState: {
		name: "Name",
		className: "Default",
		money: 22000,
		stones: 200,
		stats: {
			health: 42,
			armor: 0,
			critic: 25,
			dodge: 15,
			lucky: 2,
			karma: 1,
			trullyKarma: 1.5,
		},
		classEffects: {},
		equipment: {
			helmet: {
				id: 3,
				src: "/src/assets/armors/helmets/lucky-helmet.svg",
				alt: "a lucky rare helmet",
				quality: "rare",
				equipKey: "helmet",
				equipType: "armor",
				type: "helmet",
				armor: 0.4,
				health: 5,
				passiveEffects: {
					luckyStatMultiplier: 0.2,
				},
			},
			leftHand: {
				id: 1,
				src: "/src/assets/weapons/swords/simple-sword.svg",
				quality: "common",
				equipType: "weapon",
				type: "sword",
				alt: "a simple common sword",
				attack: 6,
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
	},
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		},

		setInitialCharacterStats: (state, action) => {
			const { name, stats, money, stones, items, classEffects } = action.payload

			state.className = name
			state.money = money
			state.stones = stones
			state.classEffects = classEffects
			state.stats = stats

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
} = playerReducer.actions

export default playerReducer.reducer
