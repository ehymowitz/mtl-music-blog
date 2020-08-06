// TODO: Card with RAM for home page
// Hover to show details
// Reading time: https://www.gatsbyjs.org/packages/gatsby-remark-reading-time-v2/

import React from "react"
import Img from "gatsby-image"

export default function HomeCard({fluid, title, date, author}) {
  return (
    <div>
      <Img
        fluid={fluid}
        alt={title}
        style={{
          height: "40vh",
          margin: "10px"
        }}
      />
      <div>
        <p>{title}{date}{author}</p>
      </div>
    </div>
  )
}
