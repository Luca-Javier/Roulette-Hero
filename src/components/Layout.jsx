import React from "react"
import Tittle from "./Tittle"

function Layout({ children }) {
	return (
		<>
			<Tittle />
			<main className="border border-3 border-white rounded-4 flex-grow-1 overflow-hidden">
				{children}
			</main>
		</>
	)
}

export default Layout
