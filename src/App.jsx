import Layout from "./components/Layout"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./views/index"
import Music from "./components/Music"
import { Suspense, lazy, useEffect } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import Loader from "./components/Loader"

export default () => {
	const { language } = useSelector(state => state.userConfig)
	const { i18n } = useTranslation()

	useEffect(() => {
		if (language) i18n.changeLanguage(language)
	}, [])

	const LazyCharacters = lazy(() => import("./views/Characters")),
		LazyOptions = lazy(() => import("./views/Options")),
		LazyAbout = lazy(() => import("./views/About")),
		LazyAskName = lazy(() => import("./views/AskName")),
		LazyPlaying = lazy(() => import("./views/Playing")),
		LazyErrorPage = lazy(() => import("./views/ErrorPage"))

	return (
		<Layout>
			<Suspense fallback={<Loader />}>
				<Music src="/src/assets/enviroment.mp3" />
				<HashRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<LazyCharacters />} />
						<Route path="/options" element={<LazyOptions />} />
						<Route path="/ask-name" element={<LazyAskName />} />
						<Route path="/playing" element={<LazyPlaying />} />
						<Route path="/about" element={<LazyAbout />} />
						<Route path="*" element={<LazyErrorPage />} />
					</Routes>
				</HashRouter>
			</Suspense>
		</Layout>
	)
}
