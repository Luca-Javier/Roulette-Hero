/**
 * @requires module:react-custom-roulette
 * @deprecated  This package is builtin React ^16.13.1
 * @file Roulette element
 *
 */

import React from "react"
import { Wheel } from "react-custom-roulette"
import useWheel from "../context/useWheel"
//import pointer from "../assets/icons/Roulette-pointer.svg"

const MyWheel = () => {
  //Imports
  const wheel = useWheel()

  //Variables
  const { winner, spin, data, config } = wheel
  const { width, height, top, left, hidden } = config
  let classNone = hidden ? "" : "none"

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
            height: "60px",
            transform: "rotate(45deg)",
          },
        }}
        mustStartSpinning={spin}
        prizeNumber={winner}
        data={data}
        perpendicularText={true}
        textDistance={30 * (width / 150)}
        outerBorderColor="white"
        spinDuration={0.1}
      />
    </div>
  )
}
export default MyWheel
