import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setName } from "@reducers/playerReducer"
import Button from "@components/Button"
import { resetEventStore, setEvent } from "../reducers/eventReducer"
import { rootReducer } from "../store"
import { useEffect } from "react"
import { configureStore, createStore } from "@reduxjs/toolkit"
import { setSection } from "../reducers/sectionReducer"
import { resetFightStore } from "../reducers/fightReducer"
import { resetPlayerStore } from "../reducers/playerReducer"

function AskName() {
	//Imports
	const navigate = useNavigate()
	const dispatch = useDispatch()

	//Events
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(setName(e.target.name.value))
		navigate("/playing")
	}

	return (
		<div className="form-ask-name">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">What is your name traveler?</label>
				<input
					defaultValue={import.meta.env.DEV ? "Developer" : ""}
					pattern="^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s_-]+$"
					required
					autoComplete="off"
					className="input placeholder"
					type="text"
					name="name"
					placeholder="Name..."
				/>
				<Button text="Ready" />
			</form>
		</div>
	)
}

export default AskName
