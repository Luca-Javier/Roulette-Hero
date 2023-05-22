function Loader() {
	return (
		<div className="h-100 w-100 flex justify-center align-center">
			<div style={{ position: "relative", textAlign: "center" }}>
				<svg
					style={{ width: 250, height: 200 }}
					className="loader"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 200 200">
					<defs>
						<mask id="circle-mask">
							<circle cx="100" cy="100" r="50" fill="#7f8084" />
						</mask>
					</defs>

					<circle
						cx="100"
						cy="100"
						r="50"
						fill="#7f8084"
						stroke="black"
						strokeWidth="2"
					/>

					<path
						d="M100,10 L100,100 L190,100 Z"
						fill="#afb2b7"
						mask="url(#circle-mask)"
					/>
					<path
						d="M100,100 L10,100 L100,190 Z"
						fill="#d7d8da"
						mask="url(#circle-mask)"
					/>
					<path
						d="M100,100 L100,10 L10,100 Z"
						fill="#e6dcdc"
						mask="url(#circle-mask)"
					/>

					<path
						d="M50,100 L150,100 Z"
						fill="#afb2b7"
						stroke="black"
						strokeWidth="2"
					/>
					<path
						d="M100,50 L100,150 Z"
						fill="#afb2b7"
						stroke="black"
						strokeWidth="2"
					/>
				</svg>
				<p
					className="loader-text "
					style={{ position: "absolute", bottom: 0, width: "100%" }}>
					Loading
				</p>
			</div>
		</div>
	)
}

export default Loader
