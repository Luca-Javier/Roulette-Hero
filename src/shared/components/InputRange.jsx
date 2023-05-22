import React, { useId } from "react"

function InputRange({ value, title, onChange }) {
	const id = useId()

	return (
		<div className="input-range">
			<label htmlFor={id}>
				{title}: {value}
			</label>
			<input
				id={id}
				type="range"
				value={value}
				onChange={onChange}
				max={100}
				min={0}
			/>
		</div>
	)
}

export default InputRange
