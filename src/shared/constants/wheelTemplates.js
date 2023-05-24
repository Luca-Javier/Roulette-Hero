/**
 * @file Contains the predefined wheel configs to generate the wheel
 */

import getCustomOptionWheelStyle from "@functions/getCustomOptionWheelStyle"
import i18n from "@i18n"
import {
	FORJE_PERCENT_BY_QUALITY,
	LUCKY_FORJE_PERCENT_BY_QUALITY,
} from "./forjeItems"

export const GET_WHEEL_TEMPLATE_BEGINNING = lng => {
	const t = i18n.getFixedT(lng, "pages", "wheel")

	return {
		data: [
			{
				option: t("play"),
				style: getCustomOptionWheelStyle({
					option: "Play",
				}),
			},
			{
				option: t("characters"),
				style: getCustomOptionWheelStyle({
					option: "Character",
				}),
			},
			{
				option: t("options"),
				style: getCustomOptionWheelStyle({
					option: "Options",
				}),
			},
		],
		config: { hidden: true },
	}
}

export const WHEEL_LUCKY_SHOOT = {
	data: [
		{
			option: "kill",
			optionSize: 15,
			style: getCustomOptionWheelStyle({ option: "lucky" }),
		},
		{
			option: "normal",
			optionSize: 75,
			style: getCustomOptionWheelStyle({ option: "normal" }),
		},
		{
			option: "fail",
			optionSize: 10,
			style: getCustomOptionWheelStyle({ option: "fail" }),
		},
	],
	config: {
		width: 110,
		height: 110,
		left: 120,
		top: 99,
		pointerHeight: 50,
	},
}

export const GET_WHEEL_RETURN = lng => {
	const t = i18n.getFixedT(lng, "pages", "wheel")

	return {
		data: [
			{
				option: t("return"),
				optionSize: 75,
				style: getCustomOptionWheelStyle({ option: "Character" }),
			},
			{
				option: t("stay"),
				optionSize: 25,
				style: getCustomOptionWheelStyle({ option: "Options" }),
			},
		],
	}
}

export const WHEEL_SEDUCE_SHOP = {
	data: [
		{ option: "seduce", style: getCustomOptionWheelStyle({ option: "lucky" }) },
		{ option: "angry", style: getCustomOptionWheelStyle({ option: "fail" }) },
		{
			option: "normal",
			style: getCustomOptionWheelStyle({ option: "normal" }),
		},
	],
	config: {
		width: 110,
		height: 110,
		left: 136,
		top: 114,
		pointerHeight: 50,
	},
}

export const WHEEL_RUN = {
	data: [
		{
			option: "return",
			optionSize: 75,
			style: getCustomOptionWheelStyle({ option: "fail" }),
		},
		{
			option: "run",
			optionSize: 25,
			style: getCustomOptionWheelStyle({ option: "normal" }),
		},
	],
	config: {
		width: 110,
		height: 110,
		left: 120,
		top: 99,
		pointerHeight: 50,
	},
}

export const GET_FORJE_WHEEL = quality => ({
	data: [
		{
			option: "forje",
			optionSize: FORJE_PERCENT_BY_QUALITY[quality],
			style: getCustomOptionWheelStyle({ option: "forje" }),
		},
		{
			option: "fail",
			optionSize: 100 - FORJE_PERCENT_BY_QUALITY[quality],
			style: getCustomOptionWheelStyle({ option: "fail" }),
		},
	],
	config: {
		width: 110,
		height: 110,
		left: 136,
		top: 114,
		pointerHeight: 50,
	},
})

export const GET_LUCKY_FORJE_WHEEL = quality => ({
	data: [
		{
			option: "forje",
			optionSize: LUCKY_FORJE_PERCENT_BY_QUALITY[quality],
			style: getCustomOptionWheelStyle({ option: "lucky" }),
		},
		{
			option: "fail",
			optionSize: 75 - LUCKY_FORJE_PERCENT_BY_QUALITY[quality],
			style: getCustomOptionWheelStyle({ option: "normal" }),
		},
		{
			option: "downgrade",
			optionSize: 25,
			style: getCustomOptionWheelStyle({ option: "fail" }),
		},
	],
	config: {
		width: 110,
		height: 110,
		left: 136,
		top: 114,
		pointerHeight: 50,
	},
})
