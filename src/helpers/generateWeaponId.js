import { useSelector } from "react-redux"
import {
  QUALITY_ITEM_PROBS,
  WEAPONS_VARIANT_PROBS,
  WEAPON_PROBS,
} from "../config/itemProbabilities"

/**
 *  Generates a weapon ID to generate an item with getItemById()
 *
 * @param {object} props
 * @param {number} [props.modifyKarma=1.0]
 * @returns {string} item id
 * @example getWeapoId(): "simple_common_sword_hand"
 */
const getWeaponId = ({ modifyKarma = 1.0 }) => {
  let id = ""

  id += WEAPONS_VARIANT_PROBS.peek() + "_"

  id += QUALITY_ITEM_PROBS.peek() + "_"

  id += WEAPON_PROBS.peek() + "_"

  id += "hand"

  return id
}

export default getWeaponId
