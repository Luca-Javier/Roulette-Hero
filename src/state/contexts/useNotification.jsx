import React from "react"
import { createContext, useContext, useState } from "react"

const notificationContext = createContext()

const useNotification = () => {
	const context = useContext(notificationContext)
	if (!context)
		throw new Error("useNotification must be whitin a notificationProvider")
	return context
}

const NotificationProvider = ({ children }) => {
	const [content, setContent] = useState()
	const [isVisible, setisVisible] = useState(null)

	const notificate = content => {
		setTimeout(() => {
			setisVisible(true)
			setContent(content)
		}, 200)
		setTimeout(() => setisVisible(false), 4000)
	}

	const close = () => setisVisible(false)

	const exports = { notificate, content, isVisible, close }

	return (
		<notificationContext.Provider value={exports}>
			{children}
		</notificationContext.Provider>
	)
}

export { useNotification, NotificationProvider }
