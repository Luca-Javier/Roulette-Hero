import { useNavigate, useRouteError } from "react-router-dom"
import Button from "./components/Button"
import MyWheel from "./components/MyWheel"

export default function ErrorPage() {
  const navigate = useNavigate()

  const handleReturn = async () => {
    navigate("/")
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Please return back to beginning</p>

      <MyWheel />
      <Button text="return" onClick={handleReturn} />
      <p></p>
    </div>
  )
}
