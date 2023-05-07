import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setItemInfo } from "@reducers/eventReducer"
import useSections from "@hooks/useSections"
import useEquip from "../../../hooks/useEquip"

function Backpag() {
	//Imports
	const { backpag } = useSelector(state => state.player)
	const dispatch = useDispatch()
	const { sections, setSection, showItemInfo } = useSections()

	//Event

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
