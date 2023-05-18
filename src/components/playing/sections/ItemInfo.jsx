import React from "react"
import { useSelector } from "react-redux"
import WeaponInfo from "@components/WeaponInfo"
import ArmorInfo from "@components/ArmorInfo"

function ItemInfo() {
	//Imports
	const item = useSelector(state => state.event.itemInfo)

	return (
		<article className="p-1 flex flex-column between h-100">
			{item.equipType === "weapon" && <WeaponInfo item={item} />}
			{item.equipType === "armor" && <ArmorInfo item={item} />}
		</article>
	)
}

export default ItemInfo
