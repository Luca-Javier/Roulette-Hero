import { useSelector } from "react-redux"
import Button from "./Button"
import LuckyButtons from "./LuckyButtons"
import useWheel from "../context/useWheel"
import { useEffect } from "react"
import getForjeConfigWheel from "../helpers/getForjeConfigWheel"

const upgradeQuality = {
	common: 6,
	rare: 11,
	epic: 17,
}

function ForjeButtons({}) {
	//Imports
	const { stones } = useSelector(state => state.player)
	const item = useSelector(state => state.event.itemInfo)
	const { handleSpin, configWheel } = useWheel()

	const canForje = stones >= upgradeQuality[item.quality]

	useEffect(() => {
		configWheel(getForjeConfigWheel({ quality: item.quality }))
	}, [])

	const forje = async () => {
		const res = await handleSpin()
		console.log(res)
	}

	return (
		<section className="interactive-buttons">
			<Button text="Forje" disabled={!canForje} onClick={forje} />
			<LuckyButtons text="Forje" />
		</section>
	)
}

export default ForjeButtons
