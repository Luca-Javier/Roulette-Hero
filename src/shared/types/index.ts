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
		stole?: number
		mining?: number
		lifeSteal?: number
		superCritic?: number
		strongestAttack?: number
	}
}

export type Armor = {
	id: number
	src: string
	alt: string
	quality: string
	equipType: string | "armor"
	type: string
	price: number
	variant: string
	armor: number
	health: number
	passiveEffects: {
		luckyStatMultiplier?: number
		extraArmor?: number
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

export type PLayerInitialState = {
	id: number
	description: string
	img: string
	className: string
	money: number
	stones: number
	name: string
	stats: {
		health: number
		armor: number
		critic: number
		dodge: number
		lucky: number
		karma: number
		trullyKarma: number
	}
	classEffects: {
		extraHammerDamage?: number
	}
	equipment: {
		helmet: Armor | null
		leftHand: Weapon | null
		chest: Armor | null
		rightHand: Weapon | null
		leg: Armor | null
		leftFoot: Armor | null
		rightFoot: Armor | null
	}
	backpag: []
}
