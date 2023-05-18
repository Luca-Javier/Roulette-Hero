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
	//todo Playing lazy load

	return (
		<Layout>
			<Music src="/src/assets/enviroment.mp3" />
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<Characters />} />
					<Route path="/options" element={<Options />} />
					<Route path="/ask-name" element={<AskName />} />
					<Route path="/playing" element={<Playing />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</HashRouter>
		</Layout>
	)
}
