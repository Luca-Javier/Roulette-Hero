import Layout from "./components/Layout"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./index"
import Characters from "./Characters"
import Playing from "./Playing"
import ErrorPage from "./ErrorPage"
import AskName from "./AskName"

export default () => {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/ask-name" element={<AskName />}></Route>
          <Route path="/playing" element={<Playing />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </Layout>
  )
}
