import { useDispatch } from "react-redux"
import { resetEventStore } from "@reducers/eventReducer"
import { resetFightStore } from "@reducers/fightReducer"
import { resetPlayerStore } from "@reducers/playerReducer"

function useResetApp() {
	const dispatch = useDispatch()

	const reset = () => {
		dispatch(resetEventStore())
		dispatch(resetFightStore())
		dispatch(resetPlayerStore())
	}

	return { reset }
}

export default useResetApp
