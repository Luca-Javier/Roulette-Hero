import { useDispatch } from "react-redux"
import { resetEventStore } from "../reducers/eventReducer"
import { resetFightStore } from "../reducers/fightReducer"
import { resetPlayerStore } from "../reducers/playerReducer"
import { setSection } from "../reducers/sectionReducer"

function useResetApp() {
	const dispatch = useDispatch()

	const reset = () => {
		dispatch(resetEventStore())
		dispatch(resetFightStore())
		dispatch(resetPlayerStore())
		dispatch(setSection(0))
	}

	return { reset }
}

export default useResetApp
