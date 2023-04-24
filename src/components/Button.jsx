import React from "react"
import { Link } from "react-router-dom"

const Button = ({ text, to = "", ...args }) => {
  if (to)
    return (
      <Link to={to} className="button" {...args}>
        {text}
      </Link>
    )
  return (
    <button className="button" {...args}>
      {text}
    </button>
  )
}

export default Button
