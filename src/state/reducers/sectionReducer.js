import { createSlice } from "@reduxjs/toolkit"

const sectionReducer = createSlice({
	name: "section",
	initialState: {
		sections: {
			userStats: 0,
			backpack: 1,
			fighting: 2,
			seeSwords: 3,
			itemInfo: 4,
			selectingItem: 5,
			shop: 6,
			forje: 7,
		},
		section: 0,
	},
	reducers: {
		setSection: (state, action) => {
			state.section = action.payload
		},
		resetSection: state => {
			state.section = state.sections.userStats
		},
	},
})

export const { setSection, resetSection } = sectionReducer.actions

export default sectionReducer.reducer
