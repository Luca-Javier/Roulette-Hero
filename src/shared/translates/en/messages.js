const c = (color, txt) => `<b class="color-${color}">${txt}</b>`
const money = `<b class="money">{{ money }}</b>`

export default {
	shop: {
		"not enough money": "You don't have enought money",
		seduce: [
			`The seller is ${c("lucky", "happy")} with you`,
			`The selles is ${c("lucky", "blushing")} and under the prices!`,
		],
		"seduce fail": [
			`You complimented the seller for his hair, ${c("wrong", "he is bald")}`,
			`You say that his fahter would be proud of him, ${c(
				"wrong",
				"he doesn't have a father"
			)}`,
		],
	},
	chest: {
		found: `You found a ${c("good", "chest")}`,
	},
	walking: {
		walking: "You are walking...",
		fight: "An enemy found you!",
		backFight: "You found an enemy and are in his back",
		shop: "You found a shop",
	},
	fight: {
		"one shot": c("lucky", "YOU ONE SHOTED THE ENEMY!!"),
		"player failed": `You ${c("wrong", "failed")}...`,
		"player attack": `You perfomed a {{attack}} attack`,
		"player attack damage":
			"You did <b class='color-good'>{{damage}}</b> damage",
		"enemy dodged": `The enemy ${c("wrong", "dodged")} your attack`,
		"enemy failed": `The enemy ${c("good", "failed")}`,
		"enemy attack": "The enemy perfomed a {{attack}} attack",
		"enemy attack damage":
			"The enemy did you <b class='color-wrong'>{{damage}}</b> damage",
		"player dodged": `You ${c("good", "dodged")} the attack`,
		win: "You win!",
		die: "You died...",
	},
	reward: {
		"get money": `You got ${money} coins`,
		"get stones": "You got <b class='stone'>{{stones}}</b> stones",
		"get item": `You got <b class='{{quality}}'>{{alt}}</b>`,
	},
	changeKarma: {
		money: [
			`You found ${c("money", "monedas")} in a homeless hat`,
			`You found ${c("money", "monedas")} in a wallet`,
		],
		stones: [
			`You found ${c("stones", "stones")} in a museum`,
			`You found ${c("stones", "stones")} in a friend's house`,
		],
		item: [
			`You found a ${c("good", "item")} in a camp`,
			`You found a ${c("good", "item")} in a museum`,
		],
		price: `{{customMessage}} ${c("wrong", "(-0.3 karma)")}`,
	},
	changeLucky: {
		money: [
			`You found ${c("money", "money")} below a ladder`,
			`You found ${c("money", "money")} front a black cat`,
		],
		stones: [
			`You found ${c("stones", "stones")} below a ladder`,
			`You found ${c("stones", "stones")} front a black cat`,
		],
		item: [
			`You found a ${c("good", "item")} below a ladder`,
			`You found a ${c("good", "item")} front a black cat`,
		],
		price: `{{customMessage}} ${c("wrong", "(-2 lucky)")}`,
	},
	getKarma: [
		`You found a homeless. Would you give him ${money}? 
    ${c("good", "(+0.2 karma)")}`,
		`You found a kitten orphanages. Would you donate they ${money}? 
    ${c("good", "(+0.2 karma)")}`,
	],
	getLucky: [
		`An old woman sells you a shamrock ${money}. Would you buy it? 
    ${c("good", "(+1 lucky)")}`,
		`An old man offers you a horseshoe ${money}. Would you buy it?
    ${c("good", "(+1 lucky)")}`,
	],
}
