import hitSvgSrc from "@assets/animations/hit-animation.svg"
import hurtSvgSrc from "@assets/animations/hurt-animation.svg"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import "./FightAnimation.css"

function FightAnimation({ className }) {
	const { animationClass } = useSelector(state => state.fight)

	return (
		<div className={`fight-animations ${animationClass}`}>
			<img className="hit" src={hitSvgSrc} alt="attack animation" />
			<img className="hurt" src={hurtSvgSrc} alt="hurt animation" />
		</div>
	)
}

export default FightAnimation
