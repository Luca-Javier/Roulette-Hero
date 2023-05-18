import React from "react"
import App from "./App"
import "./global.css"
import "@fontsource/arvo"
import "@fontsource/press-start-2p"
import { WheelProvider } from "./context/useWheel"
import { Provider } from "react-redux"
import store from "./store"
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
