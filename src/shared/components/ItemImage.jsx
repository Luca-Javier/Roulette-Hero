import React from "react"

function ItemImage({ item, width, className, ...args }) {
	const styles = {
		width: width || null,
		aspectRatio: 1,
	}

	return (
		<img
			className={`quality  ${item.quality} ${className || ""}`}
			style={styles}
			src={item.src}
			alt={item.alt}
			title={item.alt}
			{...args}
		/>
	)
}

export default ItemImage
