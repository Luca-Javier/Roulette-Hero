import { Wheel } from "react-custom-roulette"
import useWheel from "../context/useWheel"
//import pointer from "../assets/icons/Roulette-pointer.svg"

const MyWheel = ({}) => {
  const p = useWheel()
  const { winner, spin, data, config } = p

  const { width, height, top, left, hidden } = config

  let classNone = hidden ? "" : "none"

  console.log(winner)

  return (
    <div
      className={`wheel-container ${spin ? "" : classNone}`}
      style={{ height, width }}>
      <Wheel
        pointerProps={{
          src: "/src/assets/icons/Roulette-pointer.svg",
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
        spinDuration={[0.1]}
        //onStopSpinning={finishSpin}
      />
    </div>
  )
}
export default MyWheel
