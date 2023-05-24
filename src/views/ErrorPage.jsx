import { useNavigate } from "react-router-dom"
import Button from "@components/Button"
import MyWheel from "@components/MyWheel"
import useWheel from "@contexts/useWheel"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { GET_WHEEL_RETURN } from "@constants/wheelTemplates"

function ErrorPage() {
	const navigate = useNavigate()
	const { configWheel, handleSpin, spin } = useWheel()
	const { t, i18n } = useTranslation("pages", { keyPrefix: "error" })

	const goHome = async () => {
		const res = await handleSpin()

		if (res === t("return")) navigate("/")
	}

	useEffect(() => {
		configWheel(GET_WHEEL_RETURN(i18n.language))
	}, [])

	return (
		<div className="p-1 h-100 flex between flex-column">
			<div>
				<h1>{t("title")}</h1>
				<p>{t("sorry")}</p>
				<p>{t("guide")}</p>
			</div>

			<MyWheel />

			<div className="flex justify-center">
				<Button
					disabled={spin}
					text={t("return")}
					onClick={goHome}
					style={{ flexGrow: "unset", width: "auto" }}
				/>
			</div>
		</div>
	)
}

export default ErrorPage
