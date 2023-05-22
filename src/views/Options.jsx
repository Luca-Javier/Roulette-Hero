import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@components/Button"
import closeIcon from "@assets/icons/others/close-options.svg"
import InputRange from "@components/InputRange"
import { setMusic } from "@reducers/userConfigReducer"
import { useDispatch, useSelector } from "react-redux"
import useResetApp from "../hooks/useResetApp"
import { useTranslation } from "react-i18next"
import { setLanguage } from "../reducers/userConfigReducer"

function Options() {
	//Imports
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { music } = useSelector(state => state.userConfig)
	const { reset } = useResetApp()
	const { t, i18n } = useTranslation("pages", { keyPrefix: "options" })
	const { numEvents } = useSelector(state => state.event)

	//State
	const [section, setSection] = useState("initial")

	//Events
	const goBack = () => {
		navigate(-1)
	}

	const handleMusic = ({ target }) => {
		dispatch(setMusic(+target.value))
	}

	const handleLanguage = () => {
		const { changeLanguage, language } = i18n

		const newLanguage = language === "en" ? "es" : "en"

		changeLanguage(newLanguage)
		dispatch(setLanguage(newLanguage))
	}

	const hasPLayed = Boolean(numEvents)

	return (
		<>
			<div className="options-title">
				<h3 className="title txt-left">{t("title")}</h3>
				<img src={closeIcon} alt="close options icon" onClick={goBack} />
			</div>
			<section className="options-menu">
				{section === "initial" && (
					<>
						<Button text={t("exit")} to="/" />
						<Button text={t("resume")} onClick={goBack} />
						<Button text={t("about")} to="/about" />
						<Button
							text={t("configure")}
							onClick={() => setSection("configure")}
						/>
						{hasPLayed && <Button text={t("give up")} to="/" onClick={reset} />}
					</>
				)}

				{section === "configure" && (
					<>
						<InputRange
							value={music}
							title={t("music")}
							onChange={handleMusic}
						/>
						<Button text={t("language")} onClick={handleLanguage} />
					</>
				)}
			</section>
		</>
	)
}
export default Options
