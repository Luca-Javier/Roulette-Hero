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
    console.log(res)
    if (res) navigate("/characters")
  }

  const handlePlay = async () => {
    const res = await handleSpin(0)
    console.log(res)
    if (res) navigate("/ask-name")
  }

  const handleOptions = async () => {
    const res = await handleSpin(2)
    console.log(res)
    if (res) navigate("/options")
  }

  return (
    <section className="flex flex-column h-100">
      <h1 className="title">Roulette Hero</h1>
      <article className="grow-1">
        <MyWheel />
      </article>
      <article>
        <div className="flex-buttons">
          <Button text={"Play"} onClick={handlePlay} />
        </div>
        <div className="flex-buttons">
          <Button text="Character" onClick={handleCharacter} />
          <Button text="Options" onClick={handleOptions} />
        </div>
      </article>
    </section>
  )
}

//* Redirecciones con react-router a menu, character, playing

export default Home
