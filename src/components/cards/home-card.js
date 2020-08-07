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
        <p>{title}</p>
        <p><i>{date}</i></p>
        <p>{author}</p>
      </div>
    </div>
  )
}
