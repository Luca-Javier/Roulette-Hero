import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import MyWheel from "../components/MyWheel"

function ErrorPage() {
  //Imports
  const navigate = useNavigate()

  //Events
  const goHome = async () => {
    navigate("/")
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Please return back to beginning</p>

      <MyWheel />
      <Button text="return" onClick={goHome} />
      <p></p>
    </div>
  )
}

export default ErrorPage
