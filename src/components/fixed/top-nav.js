import React from "react"
import Link from "gatsby-link"

export default function TopNav() {
  return(
    <div className="top-nav">
      <Link to="/musicians-voice">BLOG</Link>
      <Link to="/new-releases">NEW RELEASES</Link>
      <Link to="/">
        <h1>THE SOUND GAP</h1>
      </Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTRIBUTE</Link>
    </div>
  )
}
