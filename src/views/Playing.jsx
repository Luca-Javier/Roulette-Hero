import React from "react"
import GameHeader from "../app/GameHeader"
import InteractiveButtons from "../app/InteractiveButtons"
import MainDisplay from "../app/MainDisplay"
import TextsDisplay from "../app/TextsDisplay"

function Playing() {
	return (
		<>
			<GameHeader />
			<MainDisplay />
			<TextsDisplay />
			<InteractiveButtons />
		</>
	)
}

export default Playing
