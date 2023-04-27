import React from "react"
import FooterMd from "./FooterMd"
import TittleMd from "./TittleMd"
import GodMode from "./GodMode"

const Layout = ({ children }) => {
  return (
    <>
      <TittleMd />
      <main className="border border-3 border-white rounded-4 flex-grow-1 ">
        {children}
      </main>
      <FooterMd />
    </>
  )
}

export default Layout
