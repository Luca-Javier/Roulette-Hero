import React, { useRef } from "react"
import { createContext, useContext } from "react"

const lastEventContext = createContext()

const useLastEvent = () => {
	const context = useContext(lastEventContext)
	if (!context)
		throw new Error("useLastEvent must be whitin a lastEventProvider")
	return context
}

const LastEventProvider = ({ children }) => {
	const lastEvent = useRef()

	const exports = { lastEvent }

	return (
		<lastEventContext.Provider value={exports}>
			{children}
		</lastEventContext.Provider>
	)
}

export { useLastEvent, LastEventProvider }
