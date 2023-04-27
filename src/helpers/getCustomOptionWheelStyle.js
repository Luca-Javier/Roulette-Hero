/**
 * Returns a custom style for a wheel option
 *
 * @param {string} option
 *
 * @returns {object}
 */
export default function getCustomOptionWheelStyle({ option }) {
  let bgOptionColor

  if (option === "normal") bgOptionColor = "#e6dcdc"
  else if (option === "fail") bgOptionColor = "#3a373b"
  else if (option === "critic") bgOptionColor = "#bd940f"
  else if (option === "lifeSteal") bgOptionColor = "#c21210"
  else if (option === "d") bgOptionColor = "#bd940f"

  return { style: { backgroundColor: bgOptionColor, textColor: "transparent" } }
}
