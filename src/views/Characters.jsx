import React from "react"
import { useState } from "react"
import allCharacters from "../config/characters.json"
import { useSelector } from "react-redux"
import Button from "../components/Button"
import CharacterInfo from "../components/CharacterInfo"

function Characters() {
  //Imports
  const { unlockedCharacters } = useSelector(state => state.userConfig)

  //States
  const [characterInfo, setCharacterInfo] = useState()

  //Variables
  const characters = allCharacters.filter(character =>
    unlockedCharacters.includes(character.name)
  )

  //Events
  const showCharacterInfo = e => {
    const characterSelected = characters.find(
      character => character.name === e.target.value
    )

    setCharacterInfo(characterSelected)
  }

  return (
    <>
      <h1 className="txt-center">Select Character</h1>
      <section className="flex between">
        <article className="characters-btns">
          {characters.map(({ name }) => (
            <Button
              key={name}
              value={name}
              text={name}
              onClick={showCharacterInfo}
            />
          ))}
        </article>
        <article className="character-info">
          {characterInfo && <CharacterInfo data={characterInfo} />}
        </article>
      </section>
    </>
  )
}

export default Characters
