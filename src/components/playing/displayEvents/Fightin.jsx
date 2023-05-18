import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Progressbar from "@components/Progressbar"
import playerIcon from "@assets/characters/Heart.svg"
import {
	prepareEnemyToFight,
	preparePlayerToFight,
} from "@reducers/fightReducer"
import MyWheel from "@components/MyWheel"
import FightAnimation from "../../FightAnimation"
import { EVENT } from "@config/eventsTypes"

function Fightin() {
	//Imports
	const dispatch = useDispatch()
	const playerData = useSelector(state => state.player)
	const { numEvents, event } = useSelector(state => state.event)
	const { enemy, player, animationClass, isFighting } = useSelector(
		state => state.fight
	)

	//Effects
	useEffect(() => {
		if (isFighting) return undefined

		dispatch(prepareEnemyToFight({ playerData, numEvents }))
		dispatch(preparePlayerToFight({ playerData }))
	}, [isFighting])

	return (
		<section className="fight-container">
			<article className={`fight-enemy ${animationClass}`}>
				<Progressbar max={enemy.fullHealth} value={enemy.currentHealth} />
				<img src={enemy.src} alt="Enemy figure" className="mb-0" />
			</article>
			<article className="fight-wheel-container">
				<FightAnimation />
				<MyWheel />
			</article>
			<article className={`fight-player ${animationClass}`}>
				<img src={playerIcon} alt="Player figure" />
				<Progressbar max={player.fullHealth} value={player.currentHealth} />
			</article>
		</section>
	)
}

export default Fightin
