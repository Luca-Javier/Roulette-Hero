import React from "react"
import { useSelector } from "react-redux"

const ItemInfo = ({ item }) => {
  //Imports
  const { dodge, critic } = useSelector(state => state.player.stats)

  //Variables
  const { src, alt, quality, attack } = item

  //todo pedir el leftAttack de fighter y hacer un map de wheelConfig.data y cuando option === lifeSteal mostrar info
  return (
    <article className="p-1">
      <img className={`item-info-img quality ${quality}`} src={src} alt={alt} />
      <div className="flex between">
        <div>
          <p className="stat-icon attack">{attack}</p>
          <p className="stat-icon critic">{critic}</p>
          <p className="stat-icon dodge">{dodge}</p>
        </div>
        <div>passive effects</div>
      </div>
    </article>
  )
}
export default ItemInfo
