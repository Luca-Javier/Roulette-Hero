import React from "react"
import GameHeader from "@components/playing/GameHeader"
import InteractiveButtons from "@components/playing/InteractiveButtons"
import MainInteractiveUI from "@components/playing/MainInteractiveUI"
import TextsDisplay from "@components/playing/TextsDisplay"

function Playing() {
  return (
    <>
      <GameHeader />
      <MainInteractiveUI />
      <TextsDisplay />
      <InteractiveButtons />
    </>
  )
}

export default Playing
