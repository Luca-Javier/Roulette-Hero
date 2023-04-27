import React from "react"
import { useSelector } from "react-redux"

const ItemInfo = ({ item }) => {
  //Imports
  const { critic } = useSelector(state => state.player.stats)

  //Variables
  const { src, alt, quality, attack, passiveEffects, activeEffects } = item

  console.log(item)

  //todo pedir el leftAttack de fighter y hacer un map de wheelConfig.data y cuando option === lifeSteal mostrar info
  return (
    <article className="p-1 flex">
      <img className={`item-info-img quality ${quality}`} src={src} alt={alt} />
      <div className="flex between">
        <div>
          <p className="stat-icon attack">{attack}</p>
          <p className="stat-icon critic">
            {critic}
            {passiveEffects?.luckyHitMultiplier && (
              <b className="color-good">
                {"    "} = {critic * (1 + passiveEffects.luckyHitMultiplier)}
              </b>
            )}
          </p>
        </div>
        <div>passive effects</div>
      </div>
    </article>
  )
}
export default ItemInfo
