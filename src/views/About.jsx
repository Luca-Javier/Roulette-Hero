import React, { useEffect } from "react"
import Button from "@components/Button"
import githubIcon from "../assets/icons/social/github.svg"
import gmailIcon from "../assets/icons/social/gmail.svg"
import portfolioIcon from "../assets/icons/social/portfolio.svg"
import linkedinIcon from "../assets/icons/social/linkedin.svg"
import useWheel from "../context/useWheel"
import MyWheel from "../components/MyWheel"
import { useNavigate } from "react-router-dom"
import { WHEEL_ERROR_PAGE } from "../config/wheelTemplates"
import { useTranslation } from "react-i18next"

function About() {
	const { configWheel, handleSpin, spin } = useWheel()
	const navigate = useNavigate()
	const { t, i18n } = useTranslation("pages", { keyPrefix: "about" })

	const goBack = async () => {
		const res = await handleSpin()

		if (res === t("return")) navigate(-1)
	}

	useEffect(() => {
		configWheel(WHEEL_ERROR_PAGE(i18n.language))
	}, [])

	return (
		<section className="about-cantainer">
			<div>
				<h1 className="m-0">Roulette Hero</h1>
				<p className="color-placeholder m-0">{t("description")}</p>
			</div>
			<p className="my-2">{t("issues text")}</p>

			<ul className="reset-list">
				<li>
					<a href="mailto: luca.jav45@gmail.com" target="_blank" rel="noopener">
						<img src={gmailIcon} alt="Gmail icon" />{" "}
						<span>luca.jav45@gmail.com</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/Luca-Javier"
						target="_blank"
						rel="noopener">
						<img src={githubIcon} alt="GitHub Icon" /> <span>GitHub</span>
					</a>
				</li>
				<li>
					<a href="https://PORTFOLIO" target="_blank" rel="noopener">
						<img src={portfolioIcon} alt="Programming icon <>" />{" "}
						<span>Porfolio</span>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/luca-javier-a103a2231/"
						target="_blank"
						rel="noopener">
						<img src={linkedinIcon} alt="Linkedin icon" /> <span>Linkedin</span>
					</a>
				</li>
			</ul>

			<div className="about-wheel-container">
				<MyWheel />
			</div>

			<div className="grow-1 flex align-center">
				<Button text={t("return")} onClick={goBack} disabled={spin} />
			</div>

			<a
				className="github txt-center w-100"
				href="https://github.com/Luca-Javier/Roulette-Hero"
				target="_blank"
				rel="noopener">
				<img src={githubIcon} alt="GitHub Icon" />
				<span>{t("source code")}</span>
			</a>
		</section>
	)
}

export default About
