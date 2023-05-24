import React from "react"

function CharacterInfo({ data }) {
	const { img, stats, equipment, money, stones, description, className } = data

	return (
		<section className="h-100 flex flex-column">
			<h3 className="my-0 txt-center">{className}</h3>
			<div className="character-info-img">
				{<img src={img} alt={description} style={{ height: 130 }} />}
			</div>
			<div className="flex">
				<article className="character-info-stats">
					{Object.keys(stats).map(key =>
						key !== "trullyKarma" ? (
							<p key={key} className={`stat-icon ${key}`}>
								{stats[key]}
							</p>
						) : null
					)}
				</article>

				<div className="character-fino-equip-img-container">
					<p className="money">{money}</p>
					<p className="stone">{stones}</p>

					<CharacterItems equipment={equipment} />
				</div>
			</div>
			<p className="w-100 txt-center my-0">{description}</p>
		</section>
	)
}

export default CharacterInfo

function CharacterItems({ equipment }) {
	return (
		<>
			{Object.values(equipment).map(equipData => {
				if (!equipData) return null

				const { src, alt, quality } = equipData
				return (
					<img
						key={alt}
						src={src}
						alt={alt}
						title={alt}
						className={`quality ${quality}`}
					/>
				)
			})}
		</>
	)
}
