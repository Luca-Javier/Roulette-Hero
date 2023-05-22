import React from "react"
import { useSelector } from "react-redux"
import useSections from "@hooks/useSections"

function Backpag() {
	const { backpag } = useSelector(state => state.player)
	const { showItemInfo } = useSections()

	return (
		<section className="p-1 flex flex-wrap gap-1">
			{backpag.map((item, i) => (
				<img
					onClick={() => showItemInfo(item)}
					title={item.alt}
					alt={item.alt}
					key={i}
					src={item.src}
					className={`quality ${item.quality}`}
					style={{ width: 35 }}
				/>
			))}
		</section>
	)
}

export default Backpag
