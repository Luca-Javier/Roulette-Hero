import React, { useState } from "react"
import Button from "@components/Button"
import LuckyButtons from "@components/LuckyButtons"
import { useSelector } from "react-redux"
import useFight from "@hooks/useFight"
import ItemImage from "@components/ItemImage"
import useWheel from "../../context/useWheel"

function FightingButton() {
	//Imports
	const { leftHand, rightHand } = useSelector(state => state.player.equipment)
	const {
		isFightDone,
		attack,
		player,
		enemy,
		walk,
		returnIndex,
		luckyAttack,
		isDisabled,
		run,
	} = useFight()
	const { spin } = useWheel()

	//State
	const [isAttacking, setIsAttacking] = useState(false)

	//Events
	const handleAttack = atk => {
		attack(atk)
		setIsAttacking(false)
	}

	if (isFightDone)
		return (
			<>
				{enemy.currentHealth === 0 && <Button text="Walk" onClick={walk} />}
				{player.currentHealth === 0 && (
					<Button text="End" onClick={returnIndex} />
				)}
			</>
		)

	if (!isAttacking)
		return (
			<>
				<Button
					text="Attack"
					onClick={() => setIsAttacking(true)}
					disabled={isDisabled}
				/>
				<Button text="Run" onClick={run} disabled={isDisabled} />
				<LuckyButtons
					text="Lucky Shoot"
					onClick={() => luckyAttack([player.leftAttack, player.rightAttack])}
					disabled={isDisabled}
				/>
			</>
		)

	return (
		<>
			{/* //todo PROBAR el <itemImage/> */}
			<Button text="<-" onClick={() => setIsAttacking(false)} />
			{leftHand && (
				<Button onClick={() => handleAttack(player.leftAttack)}>
					<div className="h-100 w-100 flex justify-center">
						<ItemImage item={leftHand} width={20} />
					</div>
				</Button>
			)}
			{rightHand && (
				<Button onClick={() => handleAttack(player.rightAttack)}>
					<div className="h-100 w-100 flex justify-center">
						<ItemImage item={rightHand} width={20} />
					</div>
				</Button>
			)}
		</>
	)
}

export default FightingButton
