import React, { useEffect } from "react"
import { Wheel } from "react-custom-roulette"
import useWheel from "@contexts/useWheel"
import pointerSvg from "@assets/wheel/roulette-pointer.svg"

function MyWheel() {
	const wheel = useWheel()

	const { winner, spin, data, config, configWheel } = wheel
	const { width, height, top, left, hidden, pointerHeight } = config
	let classNone = hidden ? "" : "none"

	useEffect(() => {
		return () => configWheel({ hidden: false })
	}, [])

	return (
		<div
			className={`wheel-container ${spin ? "" : classNone}`}
			style={{ height, width }}>
			<Wheel
				pointerProps={{
					src: pointerSvg,
					style: {
						left,
						top,
						position: "absolute",
						height: pointerHeight,
						transform: "rotate(45deg)",
					},
				}}
				mustStartSpinning={spin}
				prizeNumber={winner}
				data={data}
				radiusLineWidth={3}
				perpendicularText={true}
				textDistance={30 * (width / 150)}
				outerBorderColor="white"
				spinDuration={0.1}
			/>
		</div>
	)
}

export default MyWheel
