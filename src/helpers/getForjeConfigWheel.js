function getForjeConfigWheel({ quality }) {
	const percentByQuality = {
		common: 75,
		rare: 50,
		epic: 25,
	}

	return {
		data: [
			{ option: "forje", optionSize: percentByQuality[quality] },
			{ option: "fail", optionSize: 100 - percentByQuality[quality] },
		],
		config: {
			hidden: true,
			width: 110,
			height: 110,
			left: 120,
			top: 99,
			pointerHeight: 50,
		},
	}
}

export default getForjeConfigWheel
