import { useDispatch, useSelector } from "react-redux"
import { setSection as st } from "@reducers/sectionReducer"

function useSections() {
	//Imports
	const { section, sections } = useSelector(state => state.section)
	const dispatch = useDispatch()

	//Events
	const setSection = event => dispatch(st(event))

	const resetSections = () => dispatch(st(sections.userStats))

	return { section, sections, setSection, resetSections }
}

export default useSections
