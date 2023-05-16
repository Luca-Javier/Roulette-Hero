export function getWalkTime() {
	if (import.meta.env.DEV) return 500

	const randomTime = Math.random() * 7000

	return Math.max(2000, randomTime)
}
