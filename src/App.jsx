import Layout from "./components/Layout"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./index"
import Characters from "./Characters"
import Playing from "./Playing"

export default () => {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/playing" element={<Playing />}></Route>
        </Routes>
      </HashRouter>
    </Layout>
  )
}
