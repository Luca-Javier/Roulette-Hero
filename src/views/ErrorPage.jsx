import { useNavigate } from "react-router-dom"
import Button from "@components/Button"
import MyWheel from "@components/MyWheel"
import useWheel from "../context/useWheel"
import { useEffect } from "react"
import { WHEEL_ERROR_PAGE } from "../config/wheelTemplates"

function ErrorPage() {
	//Imports
	const navigate = useNavigate()
	const { configWheel, handleSpin } = useWheel()

	//Events
	const goHome = async () => {
		const res = await handleSpin()

		if (res === "Return") navigate("/")
	}

	useEffect(() => {
		configWheel(WHEEL_ERROR_PAGE)
	}, [])

	return (
		<div className="p-1 h-100 flex between flex-column">
			<div>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>Please return back to beginning</p>
			</div>

			<MyWheel />
			<div className="flex justify-center">
				<Button
					text="return"
					onClick={goHome}
					style={{ flexGrow: "unset", width: "auto" }}
				/>
			</div>
		</div>
	)
}

export default ErrorPage
