import React from "react"
import Button from "@components/Button"
import LuckyButtons from "@components/LuckyButtons"
import effects from "./effects"

function ForjeButtons() {
	const { t, canForje, forje, luckyForje, canLuckyForje } = effects()

	return (
		<section className="interactive-buttons">
			<Button text={t("forje")} disabled={!canForje} onClick={forje} />
			<LuckyButtons
				text={t("forje")}
				onClick={luckyForje}
				disabled={!canLuckyForje}
			/>
		</section>
	)
}

export default ForjeButtons
