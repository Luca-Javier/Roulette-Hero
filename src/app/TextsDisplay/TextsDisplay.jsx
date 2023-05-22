import React from "react"

import effects from "./effects"

function TextsDisplay() {
	const { messagesHistory } = effects()

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

export default TextsDisplay
