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
	id: number
	price: number
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

export type Sections = {
	userStats: number
	backpack: number
	fighting: number
	seeSwords: number
	itemInfo: number
	selectingItem: number
	shop: number
	forje: number
}

export type Events = {
	waiting: string
	walking: string
	shop: string
	fight: string
	backFight: string
	fighting: string
	chest: string
	getLucky: string
	getKarma: string
	changeKarma: string
	changeLucky: string
}
