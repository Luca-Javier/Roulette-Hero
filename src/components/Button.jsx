import { Link } from "react-router-dom"

const Button = ({ text, to = "", ...args }) => {
  if (to)
    return (
      <Link to={to}>
        <button className="button" {...args}>
          {text}
        </button>
      </Link>
    )
  return (
    <button className="button" {...args}>
      {text}
    </button>
  )
}

export default Button
