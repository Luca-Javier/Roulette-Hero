import React from "react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import getMessage from "@helpers/getMessage"

function MainDisplay() {
	//Imports
	const { event, customEventMessage, cleanChat } = useSelector(
		state => state.event
	)

	//States
	const [messagesHistory, setMessagesHistory] = useState([])

	//Effects
	useEffect(() => {
		const message = getMessage(event)

		if (!(message === undefined))
			setMessagesHistory([...messagesHistory, message])
	}, [event])

	useEffect(() => {
		if (!customEventMessage) return undefined

		setMessagesHistory([...messagesHistory, customEventMessage])
	}, [customEventMessage])

	useEffect(() => {
		if (cleanChat === "initial") return undefined

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
