import { createSlice } from "@reduxjs/toolkit"
import { EVENT } from "@config/eventsTypes"
import { EVENT_PROBS } from "@config/eventProbabilities"
import generateArmor from "@helpers/generateArmor"
import generateWeapon from "@helpers/generateWeapon"

const eventReducer = createSlice({
	name: "event",
	initialState: {
		event: EVENT.waiting,
		lastEvent: "",
		numEvents: 0,
		customEventMessage: "",
		cleanChat: "initial",
		itemInfo: null,
		shopItems: [],
	},
	reducers: {
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
			state.customEventMessage = action.payload
		},
		cleanChat: state => {
			state.cleanChat = !state.cleanChat
		},
		setItemInfo: (state, action) => {
			state.itemInfo = action.payload
		},
		removePuchasedItem: (state, action) => {
			const { item } = action.payload
			state.shopItems = state.shopItems.filter(
				shopItem => shopItem.id !== item.id
			)
		},
		cleanItemInfo: state => {
			state.itemInfo = null
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

		setLastEvent: (state, action) => {
			state.lastEvent = action.payload
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
	setLastEvent,
} = eventReducer.actions

export default eventReducer.reducer
