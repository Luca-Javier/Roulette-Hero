import hitSvgSrc from "@assets/animations/hit-animation.svg"
import hurtSvgSrc from "@assets/animations/hurt-animation.svg"
import { useSelector } from "react-redux"
import "./FightAnimation.css"

function FightAnimation() {
	const { animationClass } = useSelector(state => state.fight)

	return (
		<div className={`fight-animations ${animationClass}`}>
			<img className="hit" src={hitSvgSrc} alt="attack animation" />
			<img className="hurt" src={hurtSvgSrc} alt="hurt animation" />
		</div>
	)
}

export default FightAnimation
