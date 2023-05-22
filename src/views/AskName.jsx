import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setName } from "@reducers/playerReducer"
import Button from "@components/Button"
import { useTranslation } from "react-i18next"

function AskName() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { t } = useTranslation("pages", { keyPrefix: "askName" })

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(setName(e.target.name.value))
		navigate("/playing")
	}

	return (
		<div className="form-ask-name">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">{t("ask name")}</label>
				<input
					defaultValue={import.meta.env.DEV ? "Developer" : ""}
					pattern="^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s_-]+$"
					required
					autoComplete="off"
					className="input placeholder"
					type="text"
					name="name"
					placeholder="Andrew..."
				/>
				<Button text={t("ready")} />
			</form>
		</div>
	)
}

export default AskName
