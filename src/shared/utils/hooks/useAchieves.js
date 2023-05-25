import { useDispatch, useSelector } from "react-redux"
import { unlockCharacter } from "@reducers/userConfigReducer"
import { ACHIEVES, ACHIEVES_MESSAGES } from "@constants/achieves"
import { useNotification } from "@contexts/useNotification"

function useAchieve() {
	const dispatch = useDispatch()
	const { achieves } = useSelector(state => state.userConfig)
	const { notificate } = useNotification()
	const equipment = useSelector(state => state.player.equipment)

	const unlockHammerBro = () => {
		if (achieves.includes(ACHIEVES["hammer bro"])) return

		notificate(ACHIEVES_MESSAGES["hammer bro"])
		dispatch(unlockCharacter({ id: 3, achieve: "hammer bro" }))
	}

	const unlockKnight = () => {
		if (achieves.includes(ACHIEVES["knight"])) return
		if (Object.values(equipment).includes(null)) return

		notificate(ACHIEVES_MESSAGES["knight"])
		dispatch(unlockCharacter({ id: 2, achieve: "knight" }))
	}

	return { unlockHammerBro, unlockKnight }
}

export default useAchieve
