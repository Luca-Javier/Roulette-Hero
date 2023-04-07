import Button from "./components/Button"

function Home() {
  return (
    <section className="flex flex-column h-100">
      <h1 className="title">Roulette Hero</h1>
      <article className="grow-1">ruleta</article>
      <article>
        <div className="flex-buttons">
          <Button text={"Play"} to="/playing" />
        </div>
        <div className="flex-buttons">
          <Button text="Character" to="characters" />
          <Button text="Options" />
        </div>
      </article>
    </section>
  )
}

//* Redirecciones con react-router a menu, character, playing

export default Home
