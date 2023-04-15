import Layout from "./components/Layout"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./views/index"
import Characters from "./views/Characters"
import Playing from "./views/Playing"
import ErrorPage from "./views/ErrorPage"
import AskName from "./views/AskName"
import Options from "./views/Options"

export default () => {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/options" element={<Options />}></Route>
          <Route path="/ask-name" element={<AskName />}></Route>
          <Route path="/playing" element={<Playing />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </Layout>
  )
}
