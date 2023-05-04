import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import luckyHitMultiplierIcon from "@assets/icons/effects/lucky-hit-multiplier.svg"
import Button from "@components/Button"
import {
	addBackpag,
	equipItem,
	removeBackpag,
	updateStatsFromArmor,
} from "@reducers/playerReducer"

function ItemInfo({ forje, shop, sell, resetSections }) {
	//Imports
	const item = useSelector(state => state.event.itemInfo)
	const equipment = useSelector(state => state.player.equipment)
	const { leftHand, rightHand, leftFoot, rightFoot } = equipment
	const dispatch = useDispatch()

	//States
	const [isSelectingSide, setIsSelectingSide] = useState("")

	//Events
	const equip = () => {
		if (item.equipType === "weapon") {
			if (leftHand && rightHand) return setIsSelectingSide("weapon")

			const equipKey = leftHand ? "rightHand" : "leftHand"

			const oldItem = equipment[equipKey]

			dispatch(equipItem({ item: { ...item, equipKey } }))
			dispatch(removeBackpag({ item }))
			dispatch(addBackpag({ item: oldItem }))
			resetSections()

			return
		}

		if (item.type === "foot") {
			if (leftFoot && rightFoot) return setIsSelectingSide("foot")

			const equipKey = leftFoot ? "rightFoot" : "leftFoot"

			dispatch(equipItem({ item: { ...item, equipKey } }))
			dispatch(removeBackpag({ item }))

			dispatch(addBackpag({ item: oldItem }))
			dispatch(updateStatsFromArmor({ item }))
			resetSections()

			return
		}

		const oldItem = equipment[item.equipKey || item.type]

		console.log(oldItem)
		dispatch(equipItem({ item }))
		dispatch(removeBackpag({ item }))
		dispatch(addBackpag({ item: oldItem }))
		dispatch(updateStatsFromArmor({ item, oldItem }))
		resetSections()
	}

	const equipOnSide = equipKey => {
		const oldItem = equipment[equipKey]

		setIsSelectingSide("")
		dispatch(equipItem({ item: { ...item, equipKey } }))
		resetSections()

		dispatch(removeBackpag({ item }))
		dispatch(addBackpag({ item: oldItem }))
		if (item.equipType === "armor")
			dispatch(updateStatsFromArmor({ item, oldItem }))
	}

	return (
		<article className="p-1 flex flex-column between h-100">
			{!isSelectingSide ? (
				<>
					{item.equipType === "weapon" && <WeaponInfo item={item} />}
					{item.equipType === "armor" && <ArmorInfo item={item} />}

					<article className="flex space-around">
						<Button
							text="equip"
							style={{ width: "auto", flexGrow: "unset" }}
							onClick={equip}
						/>
						{forje && (
							<Button
								text="forje"
								style={{ width: "auto", flexGrow: "unset" }}
							/>
						)}
					</article>
				</>
			) : (
				<article className="select-side">
					<div className="flex space-around w-100">
						{isSelectingSide === "weapon" ? (
							<>
								<img
									className={`quality ${leftHand.quality}`}
									src={leftHand.src}
									alt={leftHand.alt}
									onClick={() => equipOnSide("leftHand")}
								/>
								<img
									className={`quality ${rightHand.quality}`}
									src={rightHand.src}
									alt={rightHand.alt}
									onClick={() => equipOnSide("rightHand")}
								/>
							</>
						) : (
							<>
								<img
									className={`quality ${leftFoot.quality}`}
									src={leftFoot.src}
									alt={leftFoot.alt}
									onClick={() => equipOnSide("leftFoot")}
								/>
								<img
									className={`quality ${rightFoot.quality}`}
									src={rightFoot.src}
									alt={rightFoot.alt}
									onClick={() => equipOnSide("rightFoot")}
								/>
							</>
						)}
					</div>
					<div className="flex justify-center w-100">
						<Button text="<-" onClick={() => setIsSelectingSide("")} />
					</div>
				</article>
			)}
		</article>
	)
}

export default ItemInfo

function WeaponInfo({ item }) {
	//Imports
	const { critic } = useSelector(state => state.player.stats)

	//Variables
	const { src, alt, quality, attack, passiveEffects, activeEffects } = item

	return (
		<div className="flex flex-column w-100">
			<h3 className="grow-1 font-1" style={{ marginTop: 0 }}>
				{alt}
			</h3>
			<div className="flex between">
				<img
					className={`item-info-img quality ${quality}`}
					src={src}
					alt={alt}
				/>
				<article className="info-effects-grid">
					{passiveEffects?.luckyHitMultiplier && (
						<img
							src={luckyHitMultiplierIcon}
							alt="Effect lucky hit multiplier icon"
							title={`add ${passiveEffects.luckyHitMultiplier}% lucky yo your hits`}
						/>
					)}
				</article>
			</div>
			<article className="info-stats-grid">
				<p className="stat-icon attack">{attack}</p>
				<p className="stat-icon critic">{critic}</p>
			</article>
		</div>
	)
}

function ArmorInfo({ item }) {
	//Variables
	const { src, alt, quality, health, armor, passiveEffects, activeEffects } =
		item

	return (
		<div className="flex flex-column w-100">
			<h3 className="grow-1 font-1" style={{ marginTop: 0 }}>
				{alt}
			</h3>
			<div className="flex between">
				<img
					className={`item-info-img quality ${quality}`}
					src={src}
					alt={alt}
				/>
				<article className="info-effects-grid">
					{passiveEffects?.luckyHitMultiplier && (
						<img
							src={luckyHitMultiplierIcon}
							alt="Effect lucky hit multiplier icon"
							title={`add ${passiveEffects.luckyHitMultiplier}% lucky yo your hits`}
						/>
					)}
				</article>
			</div>
			<article className="info-stats-grid">
				<p className="stat-icon health">{health}</p>
				<p className="stat-icon armor">{armor}</p>
			</article>
		</div>
	)
}

function WeaponToSelect(item, equipKey) {
	return (
		<img
			className={`quality ${item.quality}`}
			src={item.src}
			alt={item.alt}
			onClick={() => equipOnSide(equipKey)}
		/>
	)
}
