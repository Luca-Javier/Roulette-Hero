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
	else if (option === "fail") bgOptionColor = "#3a373b"
	else if (option === "critic") bgOptionColor = "#bd940f"
	else if (option === "lifeSteal") bgOptionColor = "#c21210"
	else if (option === "forje") bgOptionColor = "#314c90"
	else if (option === "lucky") bgOptionColor = "#962ce9"

	return { backgroundColor: bgOptionColor, textColor: "transparent" }
}

export default getCustomOptionWheelStyle
