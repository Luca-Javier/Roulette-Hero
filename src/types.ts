export interface ICharacterInfo {
  name: string
  money: number
  stones: number
  stats: {
    health: number
    armor: number
    attack: number
    lucky: number
    karma: number
  }
  items: [
    {
      src: string
      alt: string
      itemId: string
      quality: string
    }
  ]
  description: string
  img: string
}

export type Sections = {
  userStats: number
  backpack: number
  fightin: number
}
