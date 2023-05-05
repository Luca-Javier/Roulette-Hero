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

	const doeEquipItem = (item, oldItem) => {
		dispatch(equipItem({ item }))
		dispatch(removeBackpag({ item }))
		resetSections()

		if (oldItem) dispatch(addBackpag({ item: oldItem }))

		if (item.equipType === "armor")
			dispatch(updateStatsFromArmor({ item, oldItem }))
	}

	//Events
	const equip = () => {
		if (item.equipType === "weapon") {
			if (leftHand && rightHand) return setIsSelectingSide("weapon")

			const equipKey = leftHand ? "rightHand" : "leftHand"

			const oldItem = equipment[equipKey]

			return doeEquipItem({ ...item, equipKey }, oldItem)
		}

		if (item.type === "foot") {
			if (leftFoot && rightFoot) return setIsSelectingSide("foot")

			const equipKey = leftFoot ? "rightFoot" : "leftFoot"

			return doeEquipItem({ ...item, equipKey }, oldItem)
		}

		const oldItem = equipment[item.equipKey || item.type]

		doeEquipItem(item, oldItem)
	}

	const equipOnSide = equipKey => {
		const oldItem = equipment[equipKey]

		doeEquipItem({ ...item, equipKey }, oldItem)
	}

	return { equip, equipOnSide, isSelectingSide, setIsSelectingSide, equipment }
}

export default useEquip
