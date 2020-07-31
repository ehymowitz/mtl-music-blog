import React from "react"
import TopNav from "./top-nav"
import Footer from "./footer"

export default function Layout({children}) {
  return (
    <div className="container">
      <TopNav/>
      {children}
      <Footer/>
    </div>
  )
}
