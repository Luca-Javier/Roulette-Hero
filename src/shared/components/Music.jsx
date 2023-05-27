import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

function Music({ src }) {
	const videoRef = useRef()
	const { music } = useSelector(state => state.userConfig)

	const playVideo = () => {
		const audio = new Audio()
		audio.src = src

		videoRef.current.appendChild(audio).play()

		document.removeEventListener("click", playVideo)
	}

	useEffect(() => {
		document.addEventListener("click", playVideo)

		videoRef.current.volume = music / 100
	}, [music])

	return <audio autoPlay loop ref={videoRef} />
}

export default Music
