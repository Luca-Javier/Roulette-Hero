import React, { useCallback } from "react"
import { useState } from "react"
import allCharacters from "@constants/characters"
import { useDispatch, useSelector } from "react-redux"
import Button from "@components/Button"
import CharacterInfo from "./CharacterInfo"
import { useTranslation } from "react-i18next"
import { setInitialCharacterStats } from "@reducers/playerReducer"
import { useNavigate } from "react-router-dom"

function Characters() {
	const { unlockedCharacters } = useSelector(state => state.userConfig)
	const { t } = useTranslation("pages", { keyPrefix: "characters" })
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [charactersIndex, setCharactersIndex] = useState(0)

	const characters = useCallback(
		allCharacters().filter(character =>
			unlockedCharacters.includes(character.id)
		),
		[unlockedCharacters]
	)

	const prev = () => {
		if (charactersIndex === 0) return setCharactersIndex(characters.length - 1)
		setCharactersIndex(prev => prev - 1)
	}

	const next = () => {
		if (charactersIndex === characters.length - 1) return setCharactersIndex(0)
		setCharactersIndex(prev => prev + 1)
	}

	const selectCharacter = character => {
		dispatch(setInitialCharacterStats(character))
		navigate("/")
	}

	const characterInfo = characters[charactersIndex]

	return (
		<>
			<div className="flex flex-column h-100">
				<h1 className="txt-center">{t("title")}</h1>
				<section className="grow-1">
					{characterInfo && <CharacterInfo data={characterInfo} />}
				</section>
				<div className="flex p-1 gap-1" style={{ height: 75 }}>
					<Button text="⬅" onClick={prev} style={{ width: "5rem" }} />
					<Button
						text="Select"
						onClick={() => selectCharacter(characterInfo)}
					/>
					<Button text="➡" onClick={next} style={{ width: "5rem" }} />
				</div>
			</div>
		</>
	)
}

export default Characters
