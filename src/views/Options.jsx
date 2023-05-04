import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "@components/Button"
import closeIcon from "@assets/icons/others/close-options.svg"

function Options() {
  //Imports
  const navigate = useNavigate()

  //Events
  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="options-title">
        <h3 className="title txt-left">Options</h3>
        <img src={closeIcon} alt="close options icon" onClick={goBack} />
      </div>
      <section className="options-menu">
        <Button text="Exit" to="/" />
        <Button text="Resume" onClick={goBack} />
        <Button text="Info" />
        <Button text="Configure" />
      </section>
    </>
  )
}
export default Options
