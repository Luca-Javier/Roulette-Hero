import {
	addBackpag,
	equipItem,
	removeBackpag,
	updateStatsFromArmor,
} from "@reducers/playerReducer"
import useSections from "@hooks/useSections"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

function useEquip({ item }) {
	const dispatch = useDispatch()
	const { resetSections } = useSections()
	const equipment = useSelector(state => state.player.equipment)
	const { leftHand, rightHand, leftFoot, rightFoot } = equipment

	//States
	const [isSelectingSide, setIsSelectingSide] = useState("")

	//Events
	const equip = () => {
		if (item.equipType === "weapon") {
			if (leftHand && rightHand) return setIsSelectingSide("weapon")

			const equipKey = leftHand ? "rightHand" : "leftHand"

			const oldItem = equipment[equipKey]

			dispatch(equipItem({ item: { ...item, equipKey } }))
			dispatch(removeBackpag({ item }))
			dispatch(addBackpag({ item: oldItem }))
			resetSections()

			return
		}

		if (item.type === "foot") {
			if (leftFoot && rightFoot) return setIsSelectingSide("foot")

			const equipKey = leftFoot ? "rightFoot" : "leftFoot"

			dispatch(equipItem({ item: { ...item, equipKey } }))
			dispatch(removeBackpag({ item }))

			dispatch(addBackpag({ item: oldItem }))
			dispatch(updateStatsFromArmor({ item }))
			resetSections()

			return
		}

		const oldItem = equipment[item.equipKey || item.type]

		console.log(oldItem)
		dispatch(equipItem({ item }))
		dispatch(removeBackpag({ item }))
		dispatch(addBackpag({ item: oldItem }))
		dispatch(updateStatsFromArmor({ item, oldItem }))
		resetSections()
	}

	const equipOnSide = equipKey => {
		const oldItem = equipment[equipKey]

		setIsSelectingSide("")
		dispatch(equipItem({ item: { ...item, equipKey } }))
		resetSections()

		dispatch(removeBackpag({ item }))
		dispatch(addBackpag({ item: oldItem }))
		if (item.equipType === "armor")
			dispatch(updateStatsFromArmor({ item, oldItem }))
	}

	return { equip, equipOnSide, isSelectingSide, setIsSelectingSide, equipment }
}

export default useEquip
