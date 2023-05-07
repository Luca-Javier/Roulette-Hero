import React, { useState } from "react"
import Button from "@components/Button"
import LuckyButtons from "@components/LuckyButtons"
import { useSelector } from "react-redux"
import useFight from "@hooks/useFight"
import ItemImage from "@components/ItemImage"

function FightingButton() {
	//Imports
	const { leftHand, rightHand } = useSelector(state => state.player.equipment)
	const { isFightDone, attack, player, enemy, walk, returnIndex } = useFight()

	//State
	const [isAttacking, setIsAttacking] = useState(false)

	if (!isAttacking)
		return (
			<>
				<Button text="Attack" onClick={() => setIsAttacking(true)} />
				<Button text="Run" />
				<LuckyButtons text="Lucky Shoot" />
			</>
		)

	if (isFightDone)
		return (
			<>
				{enemy.currentHealth === 0 && <Button text="Walk" onClick={walk} />}
				{player.currentHealth === 0 && (
					<Button text="End" onClick={returnIndex} />
				)}
			</>
		)

	return (
		<>
			{/* //todo PROBAR el <itemImage/> */}
			<Button text="<-" onClick={() => setIsAttacking(false)} />
			{leftHand && (
				<Button onClick={() => attack(player.leftAttack)}>
					<div className="h-100 w-100 flex justify-center">
						<ItemImage item={leftHand} width={20} />
					</div>
				</Button>
			)}
			{rightHand && (
				<Button onClick={() => attack(player.rightAttack)}>
					<div className="h-100 w-100 flex justify-center">
						<ItemImage item={rightHand} width={20} />
					</div>
				</Button>
			)}
		</>
	)
}

export default FightingButton
