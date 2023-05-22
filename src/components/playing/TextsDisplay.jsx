import React, { useRef } from "react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { decode } from "html-entities"
import { useTranslation } from "react-i18next"

function MainDisplay() {
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

	return (
		<section className="texts-display">
			<ul className="scroll">
				{messagesHistory.length !== 0 &&
					messagesHistory
						.reverse()
						.map((message, i) => (
							<li key={i} dangerouslySetInnerHTML={{ __html: message }} />
						))}
			</ul>
		</section>
	)
}

export default MainDisplay
