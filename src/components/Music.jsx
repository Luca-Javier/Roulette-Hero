import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

function Music({ src }) {
	const videoRef = useRef()
	const { music } = useSelector(state => state.userConfig)

	const playVideo = () => {
		videoRef.current.play()
		document.removeEventListener("click", playVideo)
	}

	useEffect(() => {
		document.addEventListener("click", playVideo)

		videoRef.current.volume = music / 100
	}, [music])

	return (
		<video autoPlay loop ref={videoRef} src={src} style={{ display: "none" }} />
	)
}

export default Music
