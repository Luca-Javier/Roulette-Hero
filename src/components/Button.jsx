import React from "react"
import { Link } from "react-router-dom"

const Button = ({ text, to = "", children, className, ...args }) => {
  if (to)
    return (
      <Link to={to} className="button" {...args}>
        {text || children}
      </Link>
    )
  return (
    <button className={`button ${className}`} {...args}>
      {text || children}
    </button>
  )
}

export default Button
