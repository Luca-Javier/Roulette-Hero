/**
 * @file Contains the predefined wheel configs to generate the wheel
 */

import getCustomOptionWheelStyle from "@functions/getCustomOptionWheelStyle"
import i18n from "@i18n"
import {
	FORJE_PERCENT_BY_QUALITY,
	LUCKY_FORJE_PERCENT_BY_QUALITY,
} from "./forjeItems"
import { WHEEL_OPTIONS_SCALE_BY_TRULLYKARMA } from "./luckyScale"

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

export const GET_WHEEL_LUCKY_SHOOT = trullyKarma => {
	let killSize = Math.round(
		10 + trullyKarma * WHEEL_OPTIONS_SCALE_BY_TRULLYKARMA
	)
	if (killSize < 0) killSize = 0

	return {
		data: [
			{
				option: "kill",
				optionSize: killSize,
				style: getCustomOptionWheelStyle({ option: "lucky" }),
			},
			{
				option: "normal",
				optionSize: 85 - killSize,
				style: getCustomOptionWheelStyle({ option: "normal" }),
			},
			{
				option: "fail",
				optionSize: 15,
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

export const GET_WHEEL_SEDUCE_SHOP = ({ trullyKarma }) => {
	let seduceSize = Math.round(
		20 + trullyKarma * WHEEL_OPTIONS_SCALE_BY_TRULLYKARMA
	)
	if (seduceSize < 0) seduceSize = 0

	return {
		data: [
			{
				option: "seduce",
				optionSize: seduceSize,
				style: getCustomOptionWheelStyle({ option: "lucky" }),
			},
			{
				option: "angry",
				optionSize: 25,
				style: getCustomOptionWheelStyle({ option: "fail" }),
			},
			{
				option: "normal",
				optionSize: 75 - seduceSize,
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
}

export const GET_WHEEL_RUN = ({ trullyKarma }) => {
	let runSize = Math.round(
		25 + trullyKarma * WHEEL_OPTIONS_SCALE_BY_TRULLYKARMA
	)
	if (runSize < 0) runSize = 0

	return {
		data: [
			{
				option: "run",
				optionSize: runSize,
				style: getCustomOptionWheelStyle({ option: "normal" }),
			},
			{
				option: "return",
				optionSize: 100 - runSize,
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
}

export const GET_FORJE_WHEEL = ({ quality, trullyKarma }) => {
	let forjeSize = Math.round(
		FORJE_PERCENT_BY_QUALITY[quality] +
			trullyKarma * WHEEL_OPTIONS_SCALE_BY_TRULLYKARMA
	)
	if (forjeSize < 0) forjeSize = 0

	return {
		data: [
			{
				option: "forje",
				optionSize: forjeSize,
				style: getCustomOptionWheelStyle({ option: "forje" }),
			},
			{
				option: "fail",
				optionSize: 100 - forjeSize,
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
	}
}

export const GET_LUCKY_FORJE_WHEEL = ({ quality, trullyKarma }) => {
	let forjeSize = Math.round(
		LUCKY_FORJE_PERCENT_BY_QUALITY[quality] +
			trullyKarma * WHEEL_OPTIONS_SCALE_BY_TRULLYKARMA
	)
	if (forjeSize < 0) forjeSize = 0

	return {
		data: [
			{
				option: "forje",
				optionSize: forjeSize,
				style: getCustomOptionWheelStyle({ option: "lucky" }),
			},
			{
				option: "fail",
				optionSize: 75 - forjeSize,
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
	}
}
