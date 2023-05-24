import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import pagesEn from "./en/pages.json"
import pagesEs from "./es/pages.json"
import charactersEn from "./en/characters.json"
import charactersEs from "./es/characters.json"
import buttonsEn from "./en/buttons.json"
import buttonsEs from "./es/buttons.json"
import itemsEn from "./en/items.json"
import itemsEs from "./es/items.json"
import messagesEn from "./en/messages"
import messagesEs from "./es/messages"
import achievesEn from "./en/achieves.json"
import achievesEs from "./es/achieves.json"

const resources = {
	en: {
		pages: pagesEn,
		characters: charactersEn,
		buttons: buttonsEn,
		items: itemsEn,
		messages: messagesEn,
		achieves: achievesEn,
	},
	es: {
		pages: pagesEs,
		characters: charactersEs,
		buttons: buttonsEs,
		items: itemsEs,
		messages: messagesEs,
		achieves: achievesEs,
	},
}

i18n.use(initReactI18next).init({
	lng: "en",
	debug: true,
	returnNull: true,
	fallbackLng: "en",

	resources,
})

export default i18n
