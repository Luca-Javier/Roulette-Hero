import { useEffect } from "react"
import Button from "./components/Button"
import MyWheel from "./components/MyWheel"
import useWheel from "./context/useWheel"
import { WHEEL_TEMPLATE_BEGINNING } from "./wheelTemplates/wheelTemplates"
import { useNavigate } from "react-router-dom"

function Home() {
  const { handleSpin, configWheel } = useWheel()
  const navigate = useNavigate()

  useEffect(() => {
    configWheel(WHEEL_TEMPLATE_BEGINNING)
  }, [])

  const handleCharacter = async e => {
    const res = await handleSpin(1)
    if (res) navigate("/characters")
  }

  return (
    <section className="flex flex-column h-100">
      <h1 className="title">Roulette Hero</h1>
      <article className="grow-1">
        <MyWheel />
      </article>
      <article>
        <div className="flex-buttons">
          <Button text={"Play"} />
        </div>
        <div className="flex-buttons">
          <Button text="Character" onClick={handleCharacter} />
          <Button text="Options" />
        </div>
      </article>
    </section>
  )
}

//* Redirecciones con react-router a menu, character, playing

export default Home
