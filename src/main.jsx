import React from "react"
import App from "./App"
import "./global.css"
import "@fontsource/arvo"
import "@fontsource/press-start-2p"
import { WheelProvider } from "@contexts/useWheel"
import { Provider } from "react-redux"
import { store, persistor } from "./state/store"
import { createRoot } from "react-dom/client"
import { PersistGate } from "redux-persist/integration/react"
import "@i18n"
import { NotificationProvider } from "@contexts/useNotification"
import { LastEventProvider } from "./state/contexts/useLastEvent"
import { HelmetProvider } from "react-helmet-async"

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<WheelProvider>
			<NotificationProvider>
				<LastEventProvider>
					<HelmetProvider>
						<Provider store={store}>
							<PersistGate loading={null} persistor={persistor}>
								<App />
							</PersistGate>
						</Provider>
					</HelmetProvider>
				</LastEventProvider>
			</NotificationProvider>
		</WheelProvider>
	</React.StrictMode>
)
