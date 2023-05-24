import { useEffect } from "react"
import Button from "@components/Button"
import MyWheel from "@components/MyWheel"
import useWheel from "@contexts/useWheel"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { GET_WHEEL_TEMPLATE_BEGINNING } from "@constants/wheelTemplates"
import useResetApp from "@hooks/useResetApp"

function Home() {
	//Imports
	const navigate = useNavigate()
	const { handleSpin, configWheel, spin } = useWheel()
	const { numEvents } = useSelector(state => state.event)
	const { t, i18n } = useTranslation("pages", { keyPrefix: "index" })
	const { reset } = useResetApp()

	//Effects
	useEffect(() => {
		configWheel(GET_WHEEL_TEMPLATE_BEGINNING(i18n.language))

		import("./Characters")
		import("./Options")
		if (!numEvents) import("./AskName")
		import("./Playing").then(() => import("./AskName"))
	}, [])

	//Events
	const goCharacter = async () => {
		await handleSpin(1)
		navigate("/characters")
		reset()
	}

	const goPlay = async () => {
		await handleSpin(0)
		if (numEvents) return navigate("/playing")
		navigate("/ask-name")
	}

	const goOptions = async () => {
		await handleSpin(2)
		navigate("/options")
	}

	return (
		<section className="flex flex-column h-100">
			<h1 className="title">Roulette Hero</h1>
			<article className="grow-1">
				<MyWheel />
			</article>
			<article>
				<div className="flex-buttons">
					<Button
						text={numEvents ? t("continue") : t("play")}
						onClick={goPlay}
						disabled={spin}
					/>
				</div>
				<div className="flex-buttons">
					<Button
						text={t("characters")}
						onClick={goCharacter}
						disabled={spin}
					/>
					<Button text={t("options")} onClick={goOptions} disabled={spin} />
				</div>
			</article>
		</section>
	)
}

export default Home
