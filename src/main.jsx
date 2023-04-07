import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./global.css"
import "@fontsource/arvo"
import { WheelProvider } from "./context/useWheel"

ReactDOM.render(
  <WheelProvider>
    <App />
  </WheelProvider>,
  document.getElementById("root")
)
