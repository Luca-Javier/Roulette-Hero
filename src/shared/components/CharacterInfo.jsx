import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import { setInitialCharacterStats } from "@reducers/playerReducer"
import { useTranslation } from "react-i18next"

function CharacterInfo({ data }) {
	//Imports
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { t } = useTranslation("pages", { keyPrefix: "characters" })

	//Variables
	const { img, stats, items, money, stones, description } = data

	//Events
	const selectCharacter = character => {
		dispatch(setInitialCharacterStats(character))
		navigate("/")
	}

	return (
		<div className="scroll invisible-scroll">
			<img src={img} alt={description} style={{ maxHeight: 140 }} />
			<div className="flex between">
				<div>
					{Object.keys(stats).map(key =>
						key !== "trullyKarma" ? (
							<p key={key} className={`stat-icon ${key}`}>
								{stats[key]}
							</p>
						) : null
					)}
				</div>
				<div className="character-fino-equip-img-container">
					{items.map(({ src, alt, quality }) => (
						<img
							key={alt}
							src={src}
							alt={alt}
							title={alt}
							className={`quality ${quality}`}
						/>
					))}
				</div>
			</div>
			<div className="flex gap-05">
				<p className="money">{money}</p>
				<p className="stone">{stones}</p>
			</div>
			<p>{description}</p>
			<Button text={t("select")} onClick={() => selectCharacter(data)} />
		</div>
	)
}

export default CharacterInfo
