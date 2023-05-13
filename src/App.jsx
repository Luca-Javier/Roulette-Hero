/** @file Routing of all pages */

import Layout from "./components/Layout"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./views/index"
import Characters from "./views/Characters"
import Playing from "./views/Playing"
import ErrorPage from "./views/ErrorPage"
import AskName from "./views/AskName"
import Options from "./views/Options"
import About from "./views/About"
import Music from "./components/Music"

export default () => {
	return (
		<Layout>
			<Music src="/src/assets/enviroment.mp3" />
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/characters" element={<Characters />}></Route>
					<Route path="/options" element={<Options />}></Route>
					<Route path="/ask-name" element={<AskName />}></Route>
					<Route path="/playing" element={<Playing />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
			</HashRouter>
		</Layout>
	)
}
