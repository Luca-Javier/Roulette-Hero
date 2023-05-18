/**
 * @file Contains the predefined wheel configs to generate the wheel
 */

import getCustomOptionWheelStyle from "@helpers/getCustomOptionWheelStyle"

export const WHEEL_TEMPLATE_BEGINNING = {
	data: [
		{
			option: "Play",
			style: getCustomOptionWheelStyle({
				option: "Play",
			}),
		},
		{
			option: "Character",
			style: getCustomOptionWheelStyle({
				option: "Character",
			}),
		},
		{
			option: "Options",
			style: getCustomOptionWheelStyle({
				option: "Options",
			}),
		},
	],
	config: { hidden: true },
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

export const WHEEL_ERROR_PAGE = {
	data: [
		{
			option: "Return",
			optionSize: 75,
			style: getCustomOptionWheelStyle({ option: "Character" }),
		},
		{
			option: "Stay",
			optionSize: 25,
			style: getCustomOptionWheelStyle({ option: "Options" }),
		},
	],
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
			option: "stay",
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
