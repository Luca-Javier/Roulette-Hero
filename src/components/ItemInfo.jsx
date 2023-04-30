import React from "react"
import { useSelector } from "react-redux"

const ItemInfo = ({ item, forje }) => {
  //Imports
  const { critic } = useSelector(state => state.player.stats)
  const itemInfo = item || useSelector(state => state.event.itemInfo)

  //Variables
  const { src, alt, quality, attack, passiveEffects, activeEffects } = itemInfo

  console.log(item)

  //todo pedir forje: boolean para mostrar el botón o no
  //todo if item.type === "weapon" return <weapon> else <armor>
  //todo que abajo, con el espacio extra que tengo cuando no es para ver las 2 espadas, poner 3 botones: forje, equip, compare

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
