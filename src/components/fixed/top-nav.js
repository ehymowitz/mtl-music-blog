import React from "react"
import Link from "gatsby-link"

export default function TopNav() {
  return(
    <div className="top-nav">
      <Link activeClassName="active-link" to="/musicians-voice">BLOG</Link>
      <Link activeClassName="active-link" to="/new-releases">NEW RELEASES</Link>
      <Link activeClassName="active-link" to="/">
        <h1>THE SOUND GAP</h1>
      </Link>
      <Link activeClassName="active-link" to="/about">ABOUT</Link>
      <Link activeClassName="active-link" to="/contact">CONTRIBUTE</Link>
    </div>
  )
}
