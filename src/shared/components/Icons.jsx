import equipIcon from "@assets/icons/sections/equipment.svg"
import backpackIcon from "@assets/icons/sections/backpack.svg"
import swordsIcon from "@assets/icons/sections/swords-section.svg"
import loupeIcon from "@assets/icons/sections/loupe-info.svg"
import shopIcon from "@assets/icons/sections/shop.svg"
import forjeIcon from "@assets/icons/sections/forje.svg"

export function EquipIcon() {
	return (
		<img
			style={{ width: "17px" }}
			src={equipIcon}
			alt="Equipment icon section"
		/>
	)
}

export function BackpackIcon() {
	return (
		<img
			style={{ width: "15px" }}
			src={backpackIcon}
			alt="Backpack icon section"
		/>
	)
}

export function SwordsIcon() {
	return (
		<img
			style={{ width: "17px" }}
			src={swordsIcon}
			alt="Section swords stats"
		/>
	)
}

export function LopueIcon() {
	return (
		<img
			style={{ width: "15px" }}
			src={loupeIcon}
			alt="item info icon section"
		/>
	)
}

export function ShopIcon() {
	return (
		<img style={{ width: "15px" }} src={shopIcon} alt="Shop icon section" />
	)
}

export function ForjeIcon() {
	return (
		<img style={{ width: "15px" }} src={forjeIcon} alt="Forje icon section" />
	)
}
