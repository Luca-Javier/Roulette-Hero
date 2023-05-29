import { createSlice } from "@reduxjs/toolkit"
import { EVENT_PROBS, EVENT } from "@constants/events"
import generateArmor from "@functions/generateArmor"
import generateWeapon from "@functions/generateWeapon"
import { SECTIONS } from "@constants/sections"

const initialState = {
	event: EVENT.waiting,

	numEvents: 0,
	customEventMessage: [],
	cleanChat: "initial",
	itemInfo: null,
	shopItems: [],
	section: 0,
}

const eventReducer = createSlice({
	name: "event",
	initialState,
	reducers: {
		resetEventStore: state => {
			Object.assign(state, initialState)
		},
		setEvent: (state, action) => {
			state.event = action.payload
		},
		setRandomEvent: state => {
			state.event = EVENT_PROBS.peek()[0]
		},
		addEventNum: state => {
			state.numEvents++
		},
		addMessage: (state, action) => {
			state.customEventMessage.push(action.payload)
		},
		cleanChat: state => {
			state.customEventMessage = []
		},

		setItemInfo: (state, action) => {
			state.itemInfo = action.payload
		},
		cleanItemInfo: state => {
			state.itemInfo = null
		},
		removePuchasedItem: (state, action) => {
			const { item } = action.payload
			state.shopItems = state.shopItems.filter(
				shopItem => shopItem.id !== item.id
			)
		},

		updateShopItemsPrice: (state, action) => {
			const { isSeduced } = action.payload

			const updatedItems = state.shopItems.map(item => {
				const newPrice = isSeduced ? item.price * 0.8 : item.price * 1.2

				return { ...item, price: Math.round(newPrice) }
			})

			state.shopItems = updatedItems
		},

		createRandomShopItems: (state, action) => {
			const { trullyKarma } = action.payload

			const items = []

			for (let i = 0; i < 3; i++) {
				const isArmor = Math.random() > 0.5

				const item = isArmor
					? generateArmor({ trullyKarma })
					: generateWeapon({ trullyKarma })

				items.push(item)
			}

			state.shopItems = items
		},

		setSection: (state, action) => {
			state.section = action.payload
		},
		resetSection: state => {
			state.section = SECTIONS.userStats
		},
		showItemInfo: (state, action) => {
			const item = action.payload
			if (!item) return null

			state.itemInfo = item
			state.section = SECTIONS.itemInfo
		},
	},
})

export const {
	setEvent,
	setRandomEvent,
	addEventNum,
	addMessage,
	cleanChat,
	setItemInfo,
	cleanItemInfo,
	createRandomShopItems,
	removePuchasedItem,

	updateShopItemsPrice,
	resetEventStore,
	setSection,
	resetSection,
	showItemInfo,
} = eventReducer.actions

export default eventReducer.reducer
