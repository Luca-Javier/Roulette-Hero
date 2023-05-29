import LoaderSvg from "@assets/icons/others/loader.svg"

function Loader() {
	return (
		<div className="h-100 w-100 flex justify-center align-center">
			<div style={{ position: "relative", textAlign: "center" }}>
				<img
					src={LoaderSvg}
					alt="Loader"
					style={{ width: 250, height: 200 }}
					className="loader"
				/>
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
