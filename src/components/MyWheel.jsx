/**
 * @file Roulette element
 * @requires module:react-custom-roulette
 * @deprecated  This package is builtin React ^16.13.1
 *
 */

import React, { useEffect } from "react"
import { Wheel } from "react-custom-roulette"
import useWheel from "../context/useWheel"

function MyWheel() {
	//Imports
	const wheel = useWheel()

	//Variables
	const { winner, spin, data, config, configWheel } = wheel
	const { width, height, top, left, hidden, pointerHeight } = config
	let classNone = hidden ? "" : "none"

	//Effect unmount
	useEffect(() => {
		return () => configWheel({ hidden: false })
	}, [])

	return (
		<div
			className={`wheel-container ${spin ? "" : classNone}`}
			style={{ height, width }}>
			<Wheel
				pointerProps={{
					src: "/src/assets/wheel/roulette-pointer.svg",
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
