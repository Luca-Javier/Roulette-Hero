import { useEffect } from "react"
import Button from "@components/Button"
import MyWheel from "@components/MyWheel"
import useWheel from "@contexts/useWheel"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { GET_WHEEL_TEMPLATE_BEGINNING } from "@constants/wheelTemplates"
import useResetApp from "@hooks/useResetApp"
import { Helmet } from "react-helmet-async"

function Home() {
	const navigate = useNavigate()
	const { handleSpin, configWheel, spin } = useWheel()
	const { numEvents } = useSelector(state => state.event)
	const { t, i18n } = useTranslation("pages", { keyPrefix: "index" })
	const { reset } = useResetApp()

	useEffect(() => {
		configWheel(GET_WHEEL_TEMPLATE_BEGINNING(i18n.language))

		import("./Characters")
		import("./Options")
		if (!numEvents) import("./AskName")
		import("./Playing").then(() => import("./AskName"))
	}, [])

	const goCharacter = async e => {
		e.preventDefault()
		await handleSpin(1)
		navigate("/characters")
		reset()
	}

	const goPlay = async e => {
		e.preventDefault()
		await handleSpin(0)
		if (numEvents) return navigate("/playing")
		navigate("/ask-name")
	}

	const goOptions = async e => {
		e.preventDefault()
		await handleSpin(2)
		navigate("/options")
	}

	return (
		<section className="flex flex-column h-100">
			<Helmet>
				<title>{t("meta.title")}</title>
				<meta name="description" content={t("meta.description")} />
			</Helmet>
			<h1 className="title">Roulette Hero</h1>
			<article className="grow-1">
				<MyWheel />
			</article>
			<article>
				<div className="flex-buttons">
					<Button
						text={numEvents ? t("continue") : t("play")}
						to={numEvents ? "/playing" : "/ask-name"}
						onClick={goPlay}
						disabled={spin}
					/>
				</div>
				<div className="flex-buttons">
					<Button
						text={t("characters")}
						to="/characters"
						onClick={goCharacter}
						disabled={spin}
					/>
					<Button
						text={t("options")}
						to="/options"
						onClick={goOptions}
						disabled={spin}
					/>
				</div>
			</article>
		</section>
	)
}

export default Home
