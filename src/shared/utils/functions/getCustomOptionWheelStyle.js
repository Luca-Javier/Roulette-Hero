import { ACTIVE_EFFECTS } from "@constants/items"

/**
 * Returns a custom style for a wheel option
 *
 * @param {string} option
 *
 * @returns {object}
 */
function getCustomOptionWheelStyle({ option }) {
	let bgOptionColor

	if (option === "normal") bgOptionColor = "#e6dcdc"
	if (option === "fail") bgOptionColor = "#3a373b"
	if (option === "critic") bgOptionColor = "#bd940f"
	if (option === "forje") bgOptionColor = "#314c90"
	if (option === "lucky") bgOptionColor = "#962ce9"

	if (option === ACTIVE_EFFECTS.lifeSteal) bgOptionColor = "#c21210"
	if (option === ACTIVE_EFFECTS.stoleMoney) bgOptionColor = "#ebe534"
	if (option === ACTIVE_EFFECTS.superCritic) bgOptionColor = "#eba234"
	if (option === ACTIVE_EFFECTS.strongestAttack) bgOptionColor = "#612d05"
	if (option === ACTIVE_EFFECTS.stoleStones) bgOptionColor = "#314c90"

	if (option === "Play")
		return { backgroundColor: "#7f8084", textColor: "black" }
	if (option === "Character")
		return { bgOptionColor: "#afb2b7", textColor: "black" }
	if (option === "Options")
		return { bgOptionColor: "#d7d8da", textColor: "black" }

	return { backgroundColor: bgOptionColor, textColor: "transparent" }
}

export default getCustomOptionWheelStyle
