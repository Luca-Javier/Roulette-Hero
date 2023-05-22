import { decode } from "html-entities"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const effects = () => {
	const { event, customEventMessage, cleanChat } = useSelector(
		state => state.event
	)
	const { t } = useTranslation("messages", { keyPrefix: "walking" })

	//States
	const [messagesHistory, setMessagesHistory] = useState([])
	const lastCleanChat = useRef("initial")

	//Effects
	useEffect(() => {
		const message = t(event)

		if (message.slice(0, 8) !== "walking.")
			setMessagesHistory([...messagesHistory, message])
	}, [event])

	useEffect(() => {
		if (!customEventMessage) return undefined

		setMessagesHistory([...messagesHistory, decode(customEventMessage)])
	}, [customEventMessage])

	useEffect(() => {
		if (cleanChat === lastCleanChat.current) return undefined
		console.log("clean")
		lastCleanChat.current = cleanChat

		setMessagesHistory([])
	}, [cleanChat])

	return { messagesHistory }
}

export default effects
