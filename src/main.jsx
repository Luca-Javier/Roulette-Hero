import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./global.css"
import "@fontsource/arvo"
import { WheelProvider } from "./context/useWheel"
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <WheelProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </WheelProvider>,
  document.getElementById("root")
)
