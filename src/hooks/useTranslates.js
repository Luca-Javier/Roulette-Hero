import { useLocation } from "react-router-dom"

function useTranslates() {
	const location = useLocation()

	console.log(location)
}

export default useTranslates
