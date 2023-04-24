import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Progressbar from "../../Progressbar"
import playerIcon from "../../../assets/characters/Heart.svg"
import getRandomEnemyImage from "../../../helpers/getRandomEnemy"
import { startFight } from "../../../reducers/fightReducer"
import { WHEEL_TAMPLATE_CRIT } from "../../../config/wheelTemplates"

const Fightin = ({ setSection }) => {
  //Imports
  const dispatch = useDispatch()
  const playerStats = useSelector(state => state.player.stats)
  const { numEvents } = useSelector(state => state.event)
  const { enemy, player } = useSelector(state => state.fight)

  //Effects
  useEffect(() => {
    dispatch(startFight({ playerStats, numEvents }))

    console.log(WHEEL_TAMPLATE_CRIT(player.critickProb))
  }, [])

  return (
    <section className="fight-container">
      <article className="fight-enemy">
        <Progressbar max={enemy.fullHealth} value={enemy.currentHealth} />
        <img src={enemy.src} alt="Enemy figure" className="mb-0" />
      </article>
      {/* an absolute container for effects */}
      <article>
        <img src={playerIcon} alt="Player figure" />
        <Progressbar max={playerStats.health} value={player.currentHealth} />
      </article>
    </section>
  )
}
export default Fightin
