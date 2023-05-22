import React from "react"
import { Link } from "react-router-dom"

function Button({ text = "", to = "", children, className, ...args }) {
	if (to)
		return (
			<Link to={to} className={`button ${className || ""}`} {...args}>
				{text || children}
			</Link>
		)

	return (
		<button className={`button ${className || ""}`} {...args}>
			{text || children}
		</button>
	)
}

export default Button
