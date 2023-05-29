import React from "react"
import Button from "@components/Button"
import LuckyButtons from "@components/LuckyButtons"
import effects from "./effects"
import ItemImage from "@components/ItemImage"
import useResetApp from "@hooks/useResetApp"

function FightButtons() {
	const state = effects()
	const { isFightDone, isAttacking } = state

	if (isFightDone) return <FightDone state={state} />

	if (!isAttacking) return <FightOptions state={state} />

	return <AttackOptions state={state} />
}

export default FightButtons

function FightOptions({ state }) {
	const { t, isDisabled, luckyAttack, player, run, setIsAttacking } = state

	return (
		<>
			<Button
				text={t("attack")}
				onClick={() => setIsAttacking(true)}
				disabled={isDisabled}
			/>
			<Button text={t("run")} onClick={run} disabled={isDisabled} />
			<LuckyButtons
				text={t("lucky shoot")}
				onClick={() => luckyAttack([player.leftAttack, player.rightAttack])}
				disabled={isDisabled}
			/>
		</>
	)
}

function AttackOptions({ state }) {
	const { setIsAttacking, player, leftHand, rightHand, attack } = state

	return (
		<>
			<Button text="⬅" onClick={() => setIsAttacking(false)} />
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

function FightDone({ state }) {
	const { t, enemy, player, walk } = state
	const { reset } = useResetApp()

	return (
		<>
			{enemy.currentHealth === 0 && <Button text={t("walk")} onClick={walk} />}
			{player.currentHealth === 0 && (
				<Button
					style={{ width: "5rem", flexGrow: 0 }}
					text={t("end")}
					to="/"
					onClick={reset}
				/>
			)}
		</>
	)
}
