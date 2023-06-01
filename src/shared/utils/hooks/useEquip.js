import {
	addBackpag,
	equipItem,
	removeItem,
	updateStatsFromArmor,
} from "@reducers/playerReducer"
import { useDispatch, useSelector } from "react-redux"
import { SECTIONS } from "@constants/sections"
import { resetSection, setSection } from "@reducers/eventReducer"

function useEquip({ item }) {
	const dispatch = useDispatch()
	const equipment = useSelector(state => state.player.equipment)
	const { leftHand, rightHand, leftFoot, rightFoot } = equipment

	//Logic
	const doeEquipItem = (item, oldItem) => {
		dispatch(equipItem({ item }))
		dispatch(removeItem({ id: item.id }))
		dispatch(resetSection())

		if (oldItem) dispatch(addBackpag({ item: oldItem }))

		if (item.equipType === "armor")
			dispatch(updateStatsFromArmor({ item, oldItem }))
	}

	//Events
	const equip = () => {
		if (item.equipType === "weapon") {
			if (leftHand && rightHand)
				return dispatch(setSection(SECTIONS.selectingItem))

			const equipKey = leftHand ? "rightHand" : "leftHand"

			const oldItem = equipment[equipKey]

			return doeEquipItem({ ...item, equipKey }, oldItem)
		}

		if (item.type === "foot") {
			if (leftFoot && rightFoot)
				return dispatch(setSection(SECTIONS.selectingItem))

			const equipKey = leftFoot ? "rightFoot" : "leftFoot"

			const oldItem = equipment[equipKey]

			return doeEquipItem({ ...item, equipKey }, oldItem)
		}

		const oldItem = equipment[item.type]

		doeEquipItem(item, oldItem)
	}

	const equipOnSide = equipKey => {
		const oldItem = equipment[equipKey]

		doeEquipItem({ ...item, equipKey }, oldItem)
	}

	return {
		equip,
		equipOnSide,
		equipment,
	}
}

export default useEquip
