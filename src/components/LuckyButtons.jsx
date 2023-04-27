import React from "react"

const LuckyButtons = ({ text, ...args }) => {
  return (
    <button className="button lucky-btn" {...args}>
      <p className="lucky-btn-text">{text}</p>
    </button>
  )
}

export default LuckyButtons
