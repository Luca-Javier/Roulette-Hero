import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import LuckyButtons from "./LuckyButtons"
import useWheel from "../context/useWheel"
import { useEffect } from "react"
import getForjeConfigWheel from "../helpers/getForjeConfigWheel"
import getForgedItem from "../helpers/getFogedWeapon"
import getForgedWeapon from "../helpers/getFogedWeapon"
import {
	addBackpag,
	removeBackpag,
	replaceItem,
	updateStatsFromArmor,
	updateStones,
} from "../reducers/playerReducer"
import useSections from "../hooks/useSections"
import getForgedArmor from "../helpers/getForgedArmor"

const upgradePriceQuality = {
	common: 6,
	rare: 10,
	epic: 16,
}

function ForjeButtons({}) {
	//Imports
	const {
		stones,
		stats: { trullyKarma },
	} = useSelector(state => state.player)
	const item = useSelector(state => state.event.itemInfo)
	const { handleSpin, configWheel } = useWheel()
	const dispatch = useDispatch()
	const { setSection, sections } = useSections()

	const canForje = stones >= upgradePriceQuality[item.quality]

	useEffect(() => {
		configWheel(getForjeConfigWheel({ quality: item.quality }))
	}, [])

	const forje = async () => {
		const res = await handleSpin()

		dispatch(updateStones(-upgradePriceQuality[item.quality] / 2))

		if (res === "fail") return

		const upgradedItem =
			item.equipType === "weapon"
				? getForgedWeapon({ item, trullyKarma })
				: getForgedArmor({ item, trullyKarma })

		dispatch(replaceItem({ newItem: upgradedItem }))

		dispatch(updateStones(-upgradePriceQuality[item.quality] / 2))
		setSection(sections.userStats)
	}

	return (
		<section className="interactive-buttons">
			<Button text="Forje" disabled={!canForje} onClick={forje} />
			<LuckyButtons text="Forje" />
		</section>
	)
}

export default ForjeButtons
