import { decode } from "html-entities"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const effects = () => {
	const { event, customEventMessage, cleanChat } = useSelector(
		state => state.event
	)
	const { t } = useTranslation("messages", { keyPrefix: "walking" })

	const [messagesHistory, setMessagesHistory] = useState([])
	const lastCleanChat = useRef("initial")

	useEffect(() => {
		if (event === "waiting") return
		const message = t(event)

		setMessagesHistory([...messagesHistory, message])
	}, [event])

	useEffect(() => {
		if (!customEventMessage) return undefined

		setMessagesHistory([...messagesHistory, decode(customEventMessage)])
	}, [customEventMessage])

	useEffect(() => {
		if (cleanChat === lastCleanChat.current) return undefined
		lastCleanChat.current = cleanChat

		setMessagesHistory([])
	}, [cleanChat])

	return { messagesHistory }
}

export default effects
