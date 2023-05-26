import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { showItemInfo } from "@reducers/eventReducer"
import ItemImage from "@components/ItemImage"

function Backpag() {
	const { backpag } = useSelector(state => state.player)
	const dispatch = useDispatch()

	return (
		<section className="p-1 flex flex-wrap gap-1">
			{backpag.map((item, i) => (
				<ItemImage
					item={item}
					width={35}
					onClick={() => dispatch(showItemInfo(item))}
					key={i}
				/>
			))}
		</section>
	)
}

export default Backpag
