// Format details
// Reading time: https://www.gatsbyjs.org/packages/gatsby-remark-reading-time-v2/

import React from "react"
import Img from "gatsby-image"

export default function HomeCard({fluid, title, date, author}) {
  return (
    <div className="home-card">
      <Img
        className="img"
        fluid={fluid}
        alt={title}
      />
      <div className="hover-text">
        <p>{title}{date}{author}</p>
      </div>
    </div>
  )
}
