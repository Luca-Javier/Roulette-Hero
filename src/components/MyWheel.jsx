import { Wheel } from "react-custom-roulette"
import useWheel from "../context/useWheel"
//import pointer from "../assets/icons/Roulette-pointer.svg"

const MyWheel = ({}) => {
  const { winner, spin, data, finishSpin, config } = useWheel()

  const { width, height, top, left } = config

  return (
    <div
      style={{
        margin: "1rem auto",
        width: `${width}px`,
        height: `${height}px`,

        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "100%",
        position: "relative",
      }}>
      <div
        style={{
          transform: "rotate(-45deg)",
          position: "absolute",
          top: top,
          left: left,
        }}>
        {data.length !== 0 && (
          <Wheel
            pointerProps={{
              src: "/src/assets/icons/Roulette-pointer.svg",
              style: {
                transform: "rotate(45deg)",
                height: 70,
                width: 80,
                left: 200,
                top: 170,
              },
            }}
            mustStartSpinning={spin}
            prizeNumber={winner}
            data={data.length === 0 ? [{ option: "noError" }] : data}
            fontSize={16}
            innerRadius={0.2}
            perpendicularText={true}
            textDistance={20}
            outerBorderColor="white"
            outerBorderWidth={115}
            spinDuration={[0.1]}
            onStopSpinning={finishSpin}
          />
        )}
      </div>
    </div>
  )
}
export default MyWheel
