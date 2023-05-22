import React, { Suspense } from "react"
import App from "./App"
import "./global.css"
import "@fontsource/arvo"
import "@fontsource/press-start-2p"
import { WheelProvider } from "./context/useWheel"
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { createRoot } from "react-dom/client"
import { PersistGate } from "redux-persist/integration/react"
import "./shared/translates/i18n"

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<WheelProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</WheelProvider>
	</React.StrictMode>
)
