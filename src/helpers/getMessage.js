import { EVENT } from "../config/eventsTypes"

/**
 * Get message from event
 *
 * @param {string} event
 * @return {string} message from event
 */
function getMessage(event) {
  if (event === EVENT.walking) return `you are walking...`

  if (event === EVENT.fight) return `an enemy found you!`

  if (event === EVENT.backFight) return `you found an enemy and are in his back`

  if (event === EVENT.shop) return `you found a shop`
}

export default getMessage
