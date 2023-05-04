import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setName } from "@reducers/playerReducer"
import Button from "@components/Button"

function AskName() {
  //Imports
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //Events
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setName(e.target.name.value))
    navigate("/playing")
  }

  return (
    <div className="form-ask-name">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">What is your name traveler?</label>
        <input
          defaultValue="Testeando"
          pattern="^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s_-]+$"
          required
          autoComplete="off"
          className="input placeholder"
          type="text"
          name="name"
          placeholder="Name..."
        />
        <Button text="Ready" />
      </form>
    </div>
  )
}

export default AskName
