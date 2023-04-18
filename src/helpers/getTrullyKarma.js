export function getTrullyKarma(karma, lucky) {
  const karmaFromLucky = karma * lucky * 0.25

  return karma + karmaFromLucky
}
