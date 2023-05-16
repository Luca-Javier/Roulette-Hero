import { useEffect } from "react"
import Button from "@components/Button"
import MyWheel from "../components/MyWheel"
import useWheel from "../context/useWheel"
import { WHEEL_TEMPLATE_BEGINNING } from "@config/wheelTemplates"
import { useNavigate } from "react-router-dom"

function Home() {
	//Imports
	const { handleSpin, configWheel, spin } = useWheel()
	const navigate = useNavigate()

	//Effects
	useEffect(() => {
		configWheel(WHEEL_TEMPLATE_BEGINNING)
	}, [])

	//Events
	const goCharacter = async () => {
		const res = await handleSpin(1)
		if (res) navigate("/characters")
	}

	const goPlay = async () => {
		const res = await handleSpin(0)
		if (res) navigate("/ask-name")
	}

	const goOptions = async () => {
		const res = await handleSpin(2)
		if (res) navigate("/options")
	}

	return (
		<section className="flex flex-column h-100">
			<h1 className="title">Roulette Hero</h1>
			<article className="grow-1">
				<MyWheel />
			</article>
			<article>
				<div className="flex-buttons">
					<Button text="Play" onClick={goPlay} disabled={spin} />
				</div>
				<div className="flex-buttons">
					<Button text="Character" onClick={goCharacter} disabled={spin} />
					<Button text="Options" onClick={goOptions} disabled={spin} />
				</div>
			</article>
		</section>
	)
}

export default Home
