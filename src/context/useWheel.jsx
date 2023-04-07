import { createContext, useCallback, useContext, useState } from "react"

const wheelContext = createContext()

const useWheel = () => {
  const context = useContext(wheelContext)
  if (!context) throw new Error("useWhell must be whitin a WheelProvider")
  return context
}

const initialConfig = {
  width: 140,
  height: 140,
  top: -147,
  left: -152,
  time: 400,
}

let timeWheelFinish = 1100

const WheelProvider = ({ children }) => {
  const [spin, setSpin] = useState(false)
  const [winner, setWinner] = useState(null)
  const [data, setData] = useState([])
  const [config, setConfig] = useState(initialConfig)

  const configWheel = props => {
    setData(props.data)
    if (props.config) setConfig({ ...config, ...props.config })
  }

  const handleSpin = newWinner => {
    if (spin) return null

    let whoWins
    if (newWinner && typeof newWinner !== "object") whoWins = newWinner
    else whoWins = Math.floor(Math.random() * data.length)

    console.log(whoWins)

    setWinner(whoWins)
    console.time()
    setSpin(true)

    return new Promise(res =>
      setTimeout(() => res(data[whoWins].option), config.time + timeWheelFinish)
    )
  }

  const finishSpin = () => {
    setTimeout(() => {
      setSpin(false)
      setWinner(null)
      setData([])
    }, config.time)
  }

  const exports = {
    handleSpin,
    winner,
    spin,
    data,
    configWheel,
    config,
    finishSpin,
  }

  return (
    <wheelContext.Provider value={exports}>{children}</wheelContext.Provider>
  )
}
export default useWheel
export { wheelContext, WheelProvider }
