export type Weapon = {
  src: string
  alt: string
  quality: string
  equipKey?: string
  equipType: string | "weapon"
  type: string
  attack: number
  passiveEffects: {
    hammerDamageMultiplier?: number
    rapierCriticMultiplier?: number
    luckyHitMultiplier?: number
  }
  activeEffects: {
    lifeSteal?: number
    superCritic?: number
    strongestAttack?: number
  }
}

export type Armor = {
  src: string
  alt: string
  quality: string
  equipKey?: string
  equipType: string | "armor"
  type: string
  armor: number
  health: number
  passiveEffects: {
    luckyStatMultiplier?: number
  }
}
