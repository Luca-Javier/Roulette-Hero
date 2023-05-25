let lastTimeOut = null

export default function debounce(cb, delay) {
	if (lastTimeOut !== null) {
		clearTimeout(lastTimeOut)
		lastTimeOut = null
	}

	lastTimeOut = setTimeout(cb, delay || 300)
}
