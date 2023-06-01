import { HashRouter, Routes, Route } from "react-router-dom"
import Music from "@components/Music"
import { Suspense, lazy, useEffect } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import Loader from "@components/Loader"
import Tittle from "@components/Tittle"
import NotificationContainer from "@components/NotificationContainer"

export default () => {
	const { language } = useSelector(state => state.userConfig)
	const { i18n } = useTranslation()

	useEffect(() => {
		if (language) i18n.changeLanguage(language)
	}, [])

	const LazyHome = lazy(() => import("./views/Home")),
		LazyCharacters = lazy(() => import("./views/Characters")),
		LazyOptions = lazy(() => import("./views/Options")),
		LazyAbout = lazy(() => import("./views/About")),
		LazyAskName = lazy(() => import("./views/AskName")),
		LazyPlaying = lazy(() => import("./views/Playing")),
		LazyErrorPage = lazy(() => import("./views/ErrorPage"))

	return (
		<Layout>
			<Suspense fallback={<Loader />}>
				<Music src="assets/enviroment.mp3" />
				<NotificationContainer />
				<HashRouter>
					<Routes>
						<Route path="/" element={<LazyHome />} />
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

function Layout({ children }) {
	return (
		<>
			{/* <Tittle /> */}
			<main
				className="border border-3 border-white rounded-4 flex-grow-1 overflow-hidden"
				style={{ position: "relative" }}>
				{children}
			</main>
		</>
	)
}
