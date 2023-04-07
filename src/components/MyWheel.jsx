import { Wheel } from "react-custom-roulette"
import useWheel from "../context/useWheel"
//import pointer from "../assets/icons/Roulette-pointer.svg"

const MyWheel = ({}) => {
  const { winner, spin, data, finishSpin, config } = useWheel()

  const { width, height, top, left } = config

  console.log(winner)

  return (
    <div className="wheel-container" style={{ height, width }}>
      {
        /* data.length !== 0  */ true && (
          <Wheel
            pointerProps={{
              src: "/src/assets/icons/Roulette-pointer.svg",
              style: {
                left,
                top,
                position: "absolute",
                height: "60px",
              },
            }}
            mustStartSpinning={spin}
            prizeNumber={winner}
            data={data.length === 0 ? [{ option: "noError" }] : data}
            perpendicularText={true}
            textDistance={30 * (width / 150)}
            outerBorderColor="white"
            spinDuration={[0.1]}
            onStopSpinning={finishSpin}
          />
        )
      }
    </div>
  )
}
export default MyWheel
