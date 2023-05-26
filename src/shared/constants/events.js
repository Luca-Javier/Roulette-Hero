import WeightedList from "js-weighted-list"

const EVENT = {
	waiting: "waiting",
	walking: "walking",
	shop: "shop",
	fight: "fight",
	backFight: "backFight",
	fighting: "fighting",
	chest: "chest",
	getKarma: "getKarma",
	getLucky: "getLucky",
	changeKarma: "changeKarma",
	changeLucky: "changeLucky",
}

export { EVENT }

const EVENT_PROBS = new WeightedList([
	[EVENT.fight, 20],
	[EVENT.backFight, 25],
	[EVENT.shop, 2500],
	[EVENT.chest, 10],
	[EVENT.getKarma, 10],
	[EVENT.getLucky, 10],
	[EVENT.changeKarma, 10],
	[EVENT.changeLucky, 10],
])

export { EVENT_PROBS }
