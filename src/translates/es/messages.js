const c = (color, txt) => `<b class='color-${color}'>${txt}</b>`
const money = `<b class="money">{{ money }}</b>`

export default {
	shop: {
		"not enough money": "No tienes suficiente dinero",
		seduce: [
			`El vendedor esta ${c("lucky", "feliz")} contigo`,
			`El vendedor esta ${c("lucky", "sonrojado")} y te bajo los precios!`,
		],
		"seduce fail": [
			`Elogiaste el cabello del vendedor, ${c("wrong", "es calvo")}`,
			`Le dices que su padre estaría orgulloso, ${c("wrong", "no tuvo padre")}`,
		],
	},
	chest: {
		found: `Encontraste un ${c("good", "cofre")}`,
	},
	walking: {
		walking: "Estas caminando...",
		fight: "Un enemigo te encontro!",
		backFight: "Encontraste un enemigo y estas destras de el",
		shop: "Encontraste una tienda",
	},
	fight: {
		"one shot": c("lucky", "LO MATASTE DE UN GOLPE!!"),
		"player failed": `${c("wrong", "fallaste")} tu ataque...`,
		"player attack": `Hiciste un ataque {{attack}}`,
		"player attack damage": `Hiciste <b class='color-good'>{{damage}}</b> de daño`,
		"enemy dodged": `El enemigo ${c("wrong", "esquivo")} tu ataque`,
		"enemy failed": `El enemigo ${c("good", "failed")}`,
		"enemy attack": `El enemigo hizo un ataque {{attack}}`,
		"enemy attack damage": `El enemigo te hizo <b class='color-wrong'>{{damage}}</b> de daño`,
		"player dodged": `Has ${c("good", "esquivado")} el ataque`,
		win: "Ganaste!",
		die: "Moriste...",
		"stole money": `Robaste ${money} monedas del enemigo`,
		"stole stones": `Robaste <b class='stones'>{{stones}}</b> piedras del enemigo`,
	},
	reward: {
		"get money": `Obtuviste ${money} monedas`,
		"get stones": "Obtuviste <b class='stone'>{{stones}}</b> piedas",
		"get item": `Obtuviste <b class='{{quality}}'>{{alt}}</b>`,
	},
	changeKarma: {
		money: [
			`Encontraste unas ${c(
				"money",
				"monedas"
			)} en el sombrero de un vagabundo`,
			`Encontraste unas ${c("money", "monedas")} en una billetera`,
		],
		stones: [
			`Encontraste unas ${c("stones", "piedras")} en un museo`,
			`Encontraste unas ${c("stones", "piedras")} en la casa de tu amigo`,
		],
		item: [
			`Encontraste un ${c("good", "item")} en un campamento`,
			`Encontraste un ${c("good", "item")} en un museo`,
		],
		price: `{{customMessage}} ${c("wrong", "(-0.2 karma)")}`,
	},
	changeLucky: {
		money: [
			`Encontraste unas ${c("money", "monedas")} bajo una escalera`,
			`Encontraste unas ${c("money", "monedas")} delante de un gato negro`,
		],
		stones: [
			`Encontraste unas ${c("stones", "piedras")} bajo una escalera`,
			`Encontraste unas ${c("stones", "piedras")} delante de un gato negro`,
		],
		item: [
			`Encontraste un ${c("good", "item")} bajo una escalera`,
			`Encontraste un ${c("good", "item")} delante de un gato negro`,
		],
		price: `{{customMessage}} ${c("wrong", "(-2 lucky)")}`,
	},
	getKarma: [
		`Encontraste un vagabundo. Le darías monedas ${money}? 
    ${c("good", "(+0.2 karma)")}`,
		`Encontraste un hogar de gatitos abandonados. Les donarías ${money}? 
    ${c("good", "(+0.2 karma)")}`,
	],
	getLucky: [
		`Una anciana te vende un trebol ${money}. La compraías? 
    ${c("good", "(+1 lucky)")}`,
		`Un anciano te ofrece una herradura ${money}. La compraías?
    ${c("good", "(+1 lucky)")}`,
	],
}
