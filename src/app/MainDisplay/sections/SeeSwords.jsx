import React from "react"
import { useSelector } from "react-redux"
import WeaponInfo from "@components/WeaponInfo"

function SeeSwords() {
	const { leftHand, rightHand } = useSelector(state => state.player.equipment)

	return (
		<section className="p-1 flex flex-column between h-100 scroll">
			{leftHand && <WeaponInfo item={leftHand} />}
			{rightHand && <WeaponInfo item={rightHand} />}
		</section>
	)
}

export default SeeSwords
