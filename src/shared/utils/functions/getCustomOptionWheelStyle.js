/**
 * Returns a custom style for a wheel option
 *
 * @param {string} option
 *
 * @returns {object}
 */
function getCustomOptionWheelStyle({ option }) {
	let bgOptionColor, textColor

	if (option === "normal") bgOptionColor = "#e6dcdc"
	else if (option === "fail") bgOptionColor = "#3a373b"
	else if (option === "critic") bgOptionColor = "#bd940f"
	else if (option === "lifeSteal") bgOptionColor = "#c21210"
	else if (option === "forje") bgOptionColor = "#314c90"
	else if (option === "lucky") bgOptionColor = "#962ce9"
	else if (option === "stoleMoney") bgOptionColor = "#ebe534"
	else if (option === "superCritic") bgOptionColor = "#eba234"
	else if (option === "strongestAttack") bgOptionColor = "#612d05"
	else if (option === "Play") {
		bgOptionColor = "#7f8084"
		textColor = "black"
	} else if (option === "Character") {
		bgOptionColor = "#afb2b7"
		textColor = "black"
	} else if (option === "Options") {
		bgOptionColor = "#d7d8da"
		textColor = "black"
	}

	textColor ??= "transparent"

	return { backgroundColor: bgOptionColor, textColor }
}

export default getCustomOptionWheelStyle
