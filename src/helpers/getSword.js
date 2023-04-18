import { useSelector } from "react-redux"

/**
 * Generates a object sword by itemId or randomly
 *
 *
 *@param {string?} itemId  string that describes the sword i.e: sword-simple-rare. If it is null generates a random sword
 @param {number?} modifyKarma  number that multiply the karma to get better or worse sword
 *
 * @returns {object}  sword object
 */
const getSword = ({ itemId, modifyKarma = 1.0 }) => {
  const { trullykarma } = useSelector(state => state.player.stats)

  const karma = trullykarma * modifyKarma

  console.log(karma)
}

export default getSword
