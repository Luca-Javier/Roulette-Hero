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
import useSections from "@hooks/useSections"
import ItemImage from "../../ItemImage"
import useEquip from "../../../hooks/useEquip"

function ItemInfoTest({ forje, shop, sell }) {
	//Imports
	const item = useSelector(state => state.event.itemInfo)
	const equipment = useSelector(state => state.player.equipment)
	const { leftHand, rightHand, leftFoot, rightFoot } = equipment

	const { equip, equipOnSide, isSelectingSide, setIsSelectingSide } = useEquip()

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
							onClick={() => equip(item)}
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
								<ItemImage
									className="rotate"
									onClick={() => equipOnSide("leftHand", leftHand)}
									item={leftHand}
								/>
								<ItemImage
									onClick={() => equipOnSide("rightHand", rightHand)}
									item={rightHand}
								/>
							</>
						) : (
							<>
								<ItemImage
									className="rotate"
									onClick={() => equipOnSide("leftFoot")}
									item={leftFoot}
								/>
								<ItemImage
									onClick={() => equipOnSide("rightFoot")}
									item={rightFoot}
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

export default ItemInfoTest

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
	const { src, alt, quality, health, armor, passiveEffects } = item

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
