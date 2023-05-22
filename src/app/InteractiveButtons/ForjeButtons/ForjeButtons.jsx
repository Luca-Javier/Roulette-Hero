import React from "react"
import Button from "../../../shared/components/Button"
import LuckyButtons from "../../../shared/components/LuckyButtons"
import effects from "./effects"

function ForjeButtons() {
	const { t, canForje, forje } = effects()

	return (
		<section className="interactive-buttons">
			<Button text={t("forje")} disabled={!canForje} onClick={forje} />
			<LuckyButtons text={t("forje")} />
		</section>
	)
}

export default ForjeButtons
