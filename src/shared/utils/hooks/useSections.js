/**@typedef {import("../types.ts").Sections} Sections  */

import { useDispatch, useSelector } from "react-redux"
import { setSection as st } from "@reducers/sectionReducer"
import { setItemInfo } from "@reducers/eventReducer"

/**
 *
 * @returns {{sections:Sections}}
 */
function useSections() {
	//Imports

	/**@type {{sections:Sections,section:number}} */
	const { sections, section } = useSelector(state => state.section)

	const dispatch = useDispatch()

	//Events
	const setSection = newSection => dispatch(st(newSection))

	const resetSections = () => dispatch(st(sections.userStats))

	const showItemInfo = item => {
		if (!item) return null

		dispatch(setItemInfo(item))
		dispatch(st(sections.itemInfo))
	}

	return { section, sections, setSection, resetSections, showItemInfo }
}

export default useSections
