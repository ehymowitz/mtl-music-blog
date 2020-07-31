import React from "react"
import Link from "gatsby-link"

export default function TopNav() {
  return(
    <div className="top-nav">
      <Link to="/">
        <h1>SITE TITLE</h1>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/musicians-voice">Musicians Voice</Link>
      <Link to="/new-releases">New Releases</Link>
    </div>
  )
}
