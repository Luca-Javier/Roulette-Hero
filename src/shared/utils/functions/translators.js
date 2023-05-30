import i18n from "@i18n"

export const i18n_alt = ({ type, quality, variant }) => {
	const t = i18n.getFixedT(i18n.language, "items")

	return t("alt", {
		type: t(`type.${type}`),
		quality: t(`quality.${quality}`),
		variant: t(`variant.${variant}`),
	})
}

export const i18n_random = ({ ns, key, interpolations }) => {
	const lng = i18n.language
	console.log(lng)
	const resources = i18n.getResource(lng, ns, key)

	const t = i18n.getFixedT(lng, ns)

	const arrayKey =
		key + "." + Math.round(Math.random() * (resources.length - 1))

	return t(arrayKey, { ...interpolations })
}
