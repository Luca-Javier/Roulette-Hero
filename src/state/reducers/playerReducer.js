import { createSlice } from "@reduxjs/toolkit"
import setArmorStats from "@functions/setArmorStats"
import removeStatsFromArmor from "@functions/removeAmorStats"
import getAllCharacters from "@constants/allCharacters"
import { EQUIPTYPE } from "@constants/items"
import updateLuckyStats from "@functions/updateLuckyStats.js"

/**@typedef {import("../../shared/types/index.ts").PLayerInitialState} PLayerInitialState */

const characters = getAllCharacters()

/**@type {PLayerInitialState} */
const initialState = {
	name: "player name",
	backpag: [],
	...characters[0],
}

const playerReducer = createSlice({
	name: "player",
	initialState,
	reducers: {
		resetPlayerStore: state => {
			const characterInitialState = characters.find(
				character => character.id == state.id
			)

			Object.assign(state, {
				backpag: [],
				...characterInitialState,
			})
		},
		setName: (state, action) => {
			state.name = action.payload
		},

		setInitialCharacterStats: (state, action) => {
			Object.assign(state, {
				backpag: [],
				...action.payload,
			})
		},

		addBackpag: (state, action) => {
			const { item } = action.payload

			if (item) state.backpag.push(item)
		},

		removeItem: (state, action) => {
			const { id } = action.payload

			const backpagWihtoutItem = state.backpag.filter(
				backpagItem => backpagItem.id !== id
			)

			if (backpagWihtoutItem.length !== state.backpag.length)
				state.backpag = backpagWihtoutItem
			else
				Object.keys(state.equipment).forEach(key => {
					if (state.equipment[key]?.id !== id) return

					if (state.equipment[key].equipType == EQUIPTYPE.armor) {
						removeStatsFromArmor({ state, item: state.equipment[key] })
					}

					state.equipment[key] = null
				})
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

				if (newItem.equipType == EQUIPTYPE.armor) {
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
			updateLuckyStats({ state, karma: action.payload })
		},
		updateLucky: (state, action) => {
			updateLuckyStats({ state, lucky: action.payload })
		},
	},
})

export const {
	setName,
	setInitialCharacterStats,
	addBackpag,
	removeItem,
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
