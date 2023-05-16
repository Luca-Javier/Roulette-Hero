import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@components/Button"
import closeIcon from "@assets/icons/others/close-options.svg"
import InputRange from "@components/InputRange"
import { setMusic, setSound } from "@reducers/userConfigReducer"
import { useDispatch, useSelector } from "react-redux"

function Options() {
	//Imports
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { music, sounds } = useSelector(state => state.userConfig)

	//State
	const [section, setSection] = useState("initial")

	//Events
	const goBack = () => {
		navigate(-1)
	}

	const handleMusic = ({ target }) => {
		dispatch(setMusic(+target.value))
	}

	const handleSounds = ({ target }) => dispatch(setSound(+target.value))

	return (
		<>
			<div className="options-title">
				<h3 className="title txt-left">Options</h3>
				<img src={closeIcon} alt="close options icon" onClick={goBack} />
			</div>
			<section className="options-menu">
				{section === "initial" && (
					<>
						<Button text="Exit" to="/" />
						<Button text="Resume" onClick={goBack} />
						<Button text="About" to="/about" />
						<Button text="Configure" onClick={() => setSection("configure")} />
					</>
				)}

				{section === "configure" && (
					<>
						<InputRange value={music} title="Music" onChange={handleMusic} />
						{/* <InputRange value={sounds} title="Sounds" onChange={handleSounds} /> */}
					</>
				)}
			</section>
		</>
	)
}
export default Options
