import { useDispatch, useSelector } from "react-redux"
import { unlockCharacter } from "@reducers/userConfigReducer"
import { ACHIEVES, ACHIEVES_MESSAGES } from "@constants/achieves"
import { useNotification } from "@contexts/useNotification"

function useAchieve() {
	const dispatch = useDispatch()
	const { achieves } = useSelector(state => state.userConfig)
	const { notificate } = useNotification()

	const unlockAchieve = achieve => {
		if (achieves.includes(achieve)) return

		notificate(ACHIEVES_MESSAGES[achieve])

		if (achieve === ACHIEVES["hammer bro"])
			return dispatch(unlockCharacter({ id: 3, achieve: "hammer bro" }))

		if (achieve === ACHIEVES["knight"])
			return dispatch(unlockCharacter({ id: 2, achieve: "knight" }))
	}

	return { unlockAchieve }
}

export default useAchieve
