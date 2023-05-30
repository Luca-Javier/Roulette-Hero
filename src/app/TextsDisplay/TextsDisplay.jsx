import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { addMessage, cleanChat } from "@reducers/eventReducer"
import { useTranslation } from "react-i18next"
import { decode } from "html-entities"

function TextsDisplay() {
	const { customEventMessages, event } = useSelector(state => state.event)
	const dispatch = useDispatch()
	const { t } = useTranslation("messages", { keyPrefix: "walking" })

	useEffect(() => {
		const message = t(event)
		if (message.slice(0, 8) === "walking.") return

		dispatch(addMessage(message))

		return () => dispatch(cleanChat())
	}, [event])

	return (
		<section className="texts-display">
			<ul className="scroll">
				{customEventMessages.length !== 0 &&
					[...customEventMessages]
						.reverse()
						.map((message, i) => (
							<li
								key={i}
								dangerouslySetInnerHTML={{ __html: decode(message) }}
							/>
						))}
			</ul>
		</section>
	)
}

export default TextsDisplay
