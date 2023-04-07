import { Link } from "react-router-dom"

const Button = ({ text, to = "", ...args }) => {
  if (to)
    return (
      <button className="button" {...args}>
        <Link to={to}>{text}</Link>
      </button>
    )
  return (
    <button className="button" {...args}>
      {text}
    </button>
  )
}

export default Button
