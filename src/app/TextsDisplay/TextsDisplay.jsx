import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "@reducers/eventReducer"
import { useTranslation } from "react-i18next"

function TextsDisplay() {
	const { customEventMessage, event } = useSelector(state => state.event)
	const dispatch = useDispatch()
	const { t } = useTranslation("messages", { keyPrefix: "walking" })

	useEffect(() => {
		const message = t(event)
		if (message.slice(0, 8) === "walking.") return

		dispatch(addMessage(message))
	}, [event])

	return (
		<section className="texts-display">
			<ul className="scroll">
				{customEventMessage.length !== 0 &&
					[...customEventMessage]
						.reverse()
						.map((message, i) => (
							<li key={i} dangerouslySetInnerHTML={{ __html: message }} />
						))}
			</ul>
		</section>
	)
}

export default TextsDisplay
