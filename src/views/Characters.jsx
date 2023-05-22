import React from "react"
import { useState } from "react"
import allCharacters from "@constants/characters"
import { useSelector } from "react-redux"
import Button from "@components/Button"
import CharacterInfo from "@components/CharacterInfo"
import { useTranslation } from "react-i18next"

function Characters() {
	const { unlockedCharacters } = useSelector(state => state.userConfig)
	const { t } = useTranslation("pages", { keyPrefix: "characters" })

	const [characterInfo, setCharacterInfo] = useState()

	console.log(allCharacters(), unlockedCharacters)

	const characters = allCharacters().filter(character =>
		unlockedCharacters.includes(character.id)
	)

	const showCharacterInfo = e => {
		const characterSelected = characters.find(
			character => character.name === e.target.value
		)

		setCharacterInfo(characterSelected)
	}

	return (
		<>
			<div className="flex flex-column h-100">
				<h1 className="txt-center">{t("title")}</h1>
				<section className="flex between grow-1" style={{ maxHeight: 440 }}>
					<article className="characters-btns ">
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
			</div>
		</>
	)
}

export default Characters
