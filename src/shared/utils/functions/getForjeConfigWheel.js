import getCustomOptionWheelStyle from "./getCustomOptionWheelStyle"

function getForjeConfigWheel({ quality }) {
	const percentByQuality = {
		common: 75,
		rare: 50,
		epic: 25,
	}

	return {
		data: [
			{
				option: "forje",
				optionSize: percentByQuality[quality],
				style: getCustomOptionWheelStyle({ option: "forje" }),
			},
			{
				option: "fail",
				optionSize: 100 - percentByQuality[quality],
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

export default getForjeConfigWheel
