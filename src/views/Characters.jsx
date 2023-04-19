import { useEffect, useState } from "react"
import allCharacters from "../config/characters.json"
import { useDispatch, useSelector } from "react-redux"
import { setInitialStats } from "../reducers/playerReducer"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

const Characters = ({}) => {
  //Imports
  const { unlockedCharacters } = useSelector(state => state.userConfig)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //States
  const [characterInfo, setCharacterInfo] = useState()
  const [characters, setCharacters] = useState([])

  //Effects
  useEffect(() => {
    const allUnlockedCharacters = allCharacters.filter(character =>
      unlockedCharacters.includes(character.name)
    )

    setCharacters(allUnlockedCharacters)
  }, [])

  //Events
  const showCharacterInfo = e => {
    const characterSelected = characters.find(
      character => character.name === e.target.value
    )

    setCharacterInfo(characterSelected)
  }

  const selectCharacter = character => {
    dispatch(setInitialStats(character))
    navigate("/")
  }

  return (
    <>
      <h1 className="txt-center">Select Character</h1>
      <section className="flex between">
        <article className="characters-btns">
          {characters.map(({ name }) => (
            <Button
              key={name}
              value={name}
              text={name}
              onClick={showCharacterInfo}
            />
          ))}
        </article>
        <article className="character-info">
          {characterInfo && (
            <>
              <img src={characterInfo.img} alt={characterInfo.description} />
              <div className="flex between">
                <div>
                  {Object.keys(characterInfo.stats).map(key => (
                    <p key={key} className={`stat-icon ${key}`}>
                      {characterInfo.stats[key]}
                    </p>
                  ))}
                </div>
                <div className="character-fino-equip-img-container">
                  {characterInfo.items.map(({ src, alt, quality }) => (
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
                <p className="money">{characterInfo.money}</p>

                <p className="stone">{characterInfo.stones}</p>
              </div>
              <p>{characterInfo.description}</p>
              <Button
                text="Select"
                onClick={() => selectCharacter(characterInfo)}
              />
            </>
          )}
        </article>
      </section>
    </>
  )
}
export default Characters
