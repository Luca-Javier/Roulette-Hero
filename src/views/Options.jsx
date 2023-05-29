import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@components/Button"
import closeIcon from "@assets/icons/others/close-options.svg"
import InputRange from "@components/InputRange"
import { setMusic, setLanguage } from "@reducers/userConfigReducer"
import { useDispatch, useSelector } from "react-redux"
import useResetApp from "@hooks/useResetApp"
import { useTranslation } from "react-i18next"
import debounce from "@functions/debounce"
import { Helmet } from "react-helmet-async"

function Options() {
	const navigate = useNavigate()
	const { t, i18n } = useTranslation("pages", { keyPrefix: "options" })
	const [isInitialSection, setIsInitialSection] = useState(true)

	const goBack = () => {
		if (isInitialSection) return navigate(-1)
		setIsInitialSection(true)
	}

	return (
		<>
			<Helmet>
				<title>{t("meta.title")}</title>
				<meta name="description" content={t("meta.description")} />
			</Helmet>
			<div className="options-title">
				<h3 className="title txt-left">{t("title")}</h3>
				<img src={closeIcon} alt="close options icon" onClick={goBack} />
			</div>
			<section className="options-menu">
				{isInitialSection ? (
					<InitialSection
						t={t}
						goBack={goBack}
						setIsInitialSection={setIsInitialSection}
					/>
				) : (
					<ConfigureSection t={t} i18n={i18n} />
				)}
			</section>
		</>
	)
}

export default Options

function InitialSection({ t, goBack, setIsInitialSection }) {
	const { reset } = useResetApp()
	const { numEvents } = useSelector(state => state.event)

	const hasPLayed = Boolean(numEvents)

	return (
		<>
			<Button text={t("exit")} to="/" />
			<Button text={t("resume")} onClick={goBack} />
			<Button text={t("about")} to="/about" />
			<Button
				text={t("configure")}
				onClick={() => setIsInitialSection(false)}
			/>
			{hasPLayed && <Button text={t("give up")} to="/" onClick={reset} />}
		</>
	)
}

function ConfigureSection({ t, i18n }) {
	const { music } = useSelector(state => state.userConfig)
	const dispatch = useDispatch()

	const [volume, setVolume] = useState(music)

	const handleLanguage = () => {
		const { changeLanguage, language } = i18n

		const newLanguage = language === "en" ? "es" : "en"

		changeLanguage(newLanguage)
		dispatch(setLanguage(newLanguage))
	}

	const handleMusic = ({ target }) => {
		setVolume(+target.value)
		debounce(() => dispatch(setMusic(volume)))
	}

	return (
		<>
			<InputRange value={volume} title={t("music")} onChange={handleMusic} />
			<Button text={t("language")} onClick={handleLanguage} />
		</>
	)
}
