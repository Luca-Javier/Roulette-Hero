import { useSelector } from "react-redux"
import {
  QUALITY_ITEM_PROBS,
  WEAPONS_VARIANT_PROBS,
  WEAPON_PROBS,
} from "../config/itemProbabilities"

const getWeaponId = ({ itemId, modifyKarma = 1.0 }) => {
  let id = ""

  id += WEAPONS_VARIANT_PROBS.peek() + "_"

  id += QUALITY_ITEM_PROBS.peek() + "_"

  id += WEAPON_PROBS.peek() + "_"

  id += "hand"

  return id
}

export default getWeaponId

/* 

ir generando un item ID y al final llamar una función que me devuelva el item

*/
