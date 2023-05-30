import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

function Music({ src }) {
	const videoRef = useRef()
	const { music } = useSelector(state => state.userConfig)

	const playVideo = () => {
		if (!videoRef.current?.loop) return

		videoRef.current.src = src

		music / 100 < 0.1 ? videoRef.current.pause() : videoRef.current.play()

		document.removeEventListener("click", playVideo)
	}

	useEffect(() => {
		document.addEventListener("click", playVideo)
	}, [])

	useEffect(() => {
		if (!videoRef.current.src) return

		const volume = music / 100

		volume < 0.1 ? videoRef.current.pause() : videoRef.current.play()

		videoRef.current.volume = volume
	}, [music])

	return <audio autoPlay loop ref={videoRef} />
}

export default Music
