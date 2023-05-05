import {
	addBackpag,
	equipItem,
	removeBackpag,
	updateStatsFromArmor,
} from "@reducers/playerReducer"
import useSections from "@hooks/useSections"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

function useEquip() {
	const dispatch = useDispatch()
	const { resetSections } = useSections()
	const equipment = useSelector(state => state.player.equipment)
	const { leftHand, rightHand, leftFoot, rightFoot } = equipment

	//States
	const [isSelectingSide, setIsSelectingSide] = useState("")

	/* 
	//Functions
	const hasEmptyHand = () => {
		if (leftHand && rightHand) return setIsSelectingSide("weapon")

		const equipKey = leftHand ? "rightHand" : "leftHand"

		const oldItem = equipment[equipKey]

		return oldItem
	}

	const hasEmptyFoot = () => {
		if (leftFoot && rightFoot) return setIsSelectingSide("foot")

		const equipKey = leftFoot ? "rightFoot" : "leftFoot"

		const oldItem = equipment[equipKey]

		return oldItem
	} */

	//Events
	const doeEquipItem = (item, oldItem) => {
		/* let oldItem

		if (item.equipType === "weapon") oldItem = hasEmptyHand()
		else if (item.type === "foot") oldItem = hasEmptyFoot()
		else oldItem = equipment[item.equipKey || item.type] */

		dispatch(equipItem({ item }))
		dispatch(removeBackpag({ item }))
		resetSections()

		if (oldItem) dispatch(addBackpag({ item: oldItem }))

		if (item.equipType === "armor")
			dispatch(updateStatsFromArmor({ item, oldItem }))
	}

	const equip = item => {
		if (item.equipType === "weapon") {
			if (leftHand && rightHand) return setIsSelectingSide("weapon")

			const equipKey = leftHand ? "rightHand" : "leftHand"

			const oldItem = equipment[equipKey]

			doeEquipItem({ ...item, equipKey }, oldItem)
			return
		}

		if (item.type === "foot") {
			if (leftFoot && rightFoot) return setIsSelectingSide("foot")

			const equipKey = leftFoot ? "rightFoot" : "leftFoot"

			return doeEquipItem({ ...item, equipKey }, oldItem)
		}

		const oldItem = equipment[item.equipKey || item.type]

		doeEquipItem(item, oldItem)
	}

	const equipOnSide = (equipKey, item) => {
		const oldItem = equipment[equipKey]

		doeEquipItem({ ...item, equipKey }, oldItem)

		/* setIsSelectingSide("")
		dispatch(equipItem({ item: { ...item, equipKey } }))
		resetSections()

		dispatch(removeBackpag({ item }))
		dispatch(addBackpag({ item: oldItem }))
		if (item.equipType === "armor")
			dispatch(updateStatsFromArmor({ item, oldItem })) */
	}

	return { equip, equipOnSide, isSelectingSide, setIsSelectingSide }
}

export default useEquip
