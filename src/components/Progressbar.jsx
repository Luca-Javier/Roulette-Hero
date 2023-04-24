import React from "react"

const Progressbar = ({ value, max }) => {
  return (
    <>
      <div className="progress-container">
        <label className="progress-label">
          {value} / {max}
        </label>
        <progress value={value} max={max} />
      </div>
    </>
  )
}
export default Progressbar
