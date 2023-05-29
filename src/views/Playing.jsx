import React from "react"
import GameHeader from "../app/GameHeader"
import InteractiveButtons from "../app/InteractiveButtons"
import MainDisplay from "../app/MainDisplay"
import TextsDisplay from "../app/TextsDisplay"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

function Playing() {
	const { t } = useTranslation("pages", { keyPrefix: "playing" })

	return (
		<>
			<Helmet>
				<title>{t("meta.title")}</title>
				<meta name="description" content={t("meta.description")} />
			</Helmet>
			<GameHeader />
			<MainDisplay />
			<TextsDisplay />
			<InteractiveButtons />
		</>
	)
}

export default Playing
