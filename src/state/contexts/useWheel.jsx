import React from "react"
import { createContext, useContext, useState } from "react"

const wheelContext = createContext()

const useWheel = () => {
	const context = useContext(wheelContext)
	if (!context) throw new Error("useWhell must be whitin a WheelProvider")
	return context
}

const initialConfig = {
	width: 150,
	height: 150,
	left: 138,
	top: 109,
	time: 400,
	hidden: false,
	pointerHeight: 60,
}

const initialData = [{ option: "noError" }, { option: "noError2" }]

// Time approx that the wheel takes to finish with the actual config
let timeWheelFinish = 1200

//todo separar logica y quizas las configs de arriba en un configs local de esta carpeta
const WheelProvider = ({ children }) => {
	//States
	const [spin, setSpin] = useState(false)
	const [winner, setWinner] = useState(0)
	const [data, setData] = useState(initialData)
	const [config, setConfig] = useState(initialConfig)

	//Events
	const configWheel = props => {
		if (props.data) setData(props.data)
		if (props.config) setConfig({ ...initialConfig, ...props.config })
		else setConfig(initialConfig)
	}

	const handleSpin = newWinner => {
		if (spin) return null

		setSpin(true)

		let whoWins
		if (newWinner !== undefined && typeof newWinner !== "object")
			whoWins = newWinner
		else whoWins = Math.floor(Math.random() * data.length)

		setWinner(whoWins)

		let winnerToReturn = data[whoWins].option

		return new Promise(res =>
			setTimeout(() => {
				setSpin(false)
				res(winnerToReturn)
			}, config.time + timeWheelFinish)
		)
	}

	//Exports
	const exports = {
		handleSpin,
		winner,
		spin,
		data,
		configWheel,
		config,
	}

	return (
		<wheelContext.Provider value={exports}>{children}</wheelContext.Provider>
	)
}

export default useWheel
export { wheelContext, WheelProvider }
