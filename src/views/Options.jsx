import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import closeIcon from "/src/assets/icons/others/close-options.svg"

const Options = ({}) => {
  //States
  const navigate = useNavigate()
  //todo Estado/context configure para mostrar configuraciones como sonido, etc.

  //Events
  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="options-title">
        <h3 className="title txt-left">Options</h3>
        <img src={closeIcon} alt="" onClick={goBack} />
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
