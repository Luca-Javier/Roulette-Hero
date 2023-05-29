import React, { useCallback } from "react"
import { useState } from "react"
import getAllCharacters from "@constants/allCharacters"
import { useDispatch, useSelector } from "react-redux"
import Button from "@components/Button"
import CharacterInfo from "./CharacterInfo"
import { useTranslation } from "react-i18next"
import { setInitialCharacterStats } from "@reducers/playerReducer"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"

function Characters() {
	const { unlockedCharacters } = useSelector(state => state.userConfig)
	const { t } = useTranslation("pages", { keyPrefix: "characters" })
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [charactersIndex, setCharactersIndex] = useState(0)

	const characters = useCallback(
		getAllCharacters().filter(character =>
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
			<Helmet>
				<title>{t("meta.title")}</title>
				<meta name="description" content={t("meta.description")} />
			</Helmet>

			<div className="flex flex-column h-100">
				<h1 className="txt-center">{t("title")}</h1>
				<section className="grow-1">
					{characterInfo && <CharacterInfo data={characterInfo} />}
				</section>
				<div className="flex p-1 gap-1" style={{ height: 75 }}>
					<SlideButtons prev={prev} next={next} hidden={characters.length < 2}>
						<Button
							text="Select"
							onClick={() => selectCharacter(characterInfo)}
						/>
					</SlideButtons>
				</div>
			</div>
		</>
	)
}

export default Characters

function SlideButtons({ children, prev, next, hidden }) {
	const styles = {
		width: "3.5rem",
		display: hidden ? "none" : "block",
	}

	return (
		<>
			<div style={{ width: styles.width }}>
				<Button text="⬅" onClick={prev} style={styles} />
			</div>
			{children}
			<div style={{ width: styles.width }}>
				<Button text="➡" onClick={next} style={styles} />
			</div>
		</>
	)
}
