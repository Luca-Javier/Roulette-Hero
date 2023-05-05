import useSections from "../hooks/useSections"
import Button from "./Button"

function ItemInfoButtons({ sell }) {
	const { setSection } = useSections()

	return (
		<section className="interactive-buttons">
			<Button text="Equip" />
			<Button text="Forje" />
			{sell && <Button text="Sell" />}
		</section>
	)
}

export default ItemInfoButtons
