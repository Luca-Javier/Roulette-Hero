import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./global.css"
import "@fontsource/arvo"
import { WheelProvider } from "./context/useWheel"
import { Provider } from "react-redux"
import store from "./store"

/* ReactDOM.render(
	<React.StrictMode>
		<WheelProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</WheelProvider>
	</React.StrictMode>,
	document.getElementById("root")
) */

import { createRoot } from "react-dom/client"
const container = document.getElementById("root")
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<WheelProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</WheelProvider>
	</React.StrictMode>
)
