import { useNavigate } from "react-router-dom"
import Button from "./components/Button"

const Options = ({}) => {
  const navigate = useNavigate()
  //todo Estado configure para mostrar configuraciones como sonido, etc.

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="options-title">
        <h3 className="title txt-left">Options</h3>
        <img src="/src/assets/icons/x_close.svg" alt="" onClick={goBack} />
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
