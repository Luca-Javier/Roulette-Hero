import { Link } from "react-router-dom"

const GameHeader = ({}) => {
  return (
    <section className="header">
      <article className="header-name">
        <p>Name</p>
        <p>Class</p>
      </article>

      <article className="flex gap-05 align-center">
        <p className="money">1000</p>
        <p className="stone">10</p>
        <div className="options-btn">
          <Link to="/options">
            <img
              className="options-btn"
              src="/src/assets/icons/option-button.svg"
              alt="Options"
            />
          </Link>
        </div>
      </article>
    </section>
  )
}
export default GameHeader
