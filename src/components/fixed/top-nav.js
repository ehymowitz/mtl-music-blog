import React from "react"
import Link from "gatsby-link"

// TODO: add contact form

export default function TopNav() {
  return(
    <div className="top-nav">
      <Link to="/musicians-voice">Blog</Link>
      <Link to="/new-releases">New Releases</Link>
      <Link to="/">
        <h1>THE SOUND GAP</h1>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/">Contact</Link>
    </div>
  )
}
