import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setName } from "../reducers/playerReducer"

const AskName = ({}) => {
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
          pattern="^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s_-]+$"
          required
          autoComplete="off"
          className="input placeholder"
          type="text"
          name="name"
          placeholder="Name..."
        />
        <button className="button">Ready</button>
      </form>
    </div>
  )
}
export default AskName
