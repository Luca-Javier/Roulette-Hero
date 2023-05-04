import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import optionButtonImg from "@assets/icons/others/options-button.svg"

function GameHeader() {
  //Imports
  const { name, className, money, stones } = useSelector(state => state.player)

  return (
    <section className="header">
      <article className="header-name">
        <p>{name}</p>
        <p>{className}</p>
      </article>

      <article className="flex gap-05 align-center">
        <p className="money">{money}</p>
        <p className="stone">{stones}</p>
        <div className="options-btn">
          <Link to="/options">
            <img className="options-btn" src={optionButtonImg} alt="Options" />
          </Link>
        </div>
      </article>
    </section>
  )
}

export default GameHeader
