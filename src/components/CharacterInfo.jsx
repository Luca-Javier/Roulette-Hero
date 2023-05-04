import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import { setInitialCharacterStats } from "@reducers/playerReducer"

function CharacterInfo({ data }) {
  //Imports
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //Variables
  const { img, stats, items, money, stones, description } = data

  //Events
  const selectCharacter = character => {
    dispatch(setInitialCharacterStats(character))
    navigate("/")
  }

  return (
    <>
      <img src={img} alt={description} />
      <div className="flex between">
        <div>
          {Object.keys(stats).map(key => (
            <p key={key} className={`stat-icon ${key}`}>
              {stats[key]}
            </p>
          ))}
        </div>
        <div className="character-fino-equip-img-container">
          {items.map(({ src, alt, quality }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              title={alt}
              className={`quality ${quality}`}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-05">
        <p className="money">{money}</p>
        <p className="stone">{stones}</p>
      </div>
      <p>{description}</p>
      <Button text="Select" onClick={() => selectCharacter(data)} />
    </>
  )
}

export default CharacterInfo
