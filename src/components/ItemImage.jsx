function ItemImage({ item, width, className, ...args }) {
	const styles = {
		width: width || null,
	}

	return (
		<img
			className={`quality  ${item.quality} ${className || ""}`}
			style={styles}
			src={item.src}
			alt={item.alt}
			{...args}
		/>
	)
}

export default ItemImage
