import React from "react"
import Img from "gatsby-image"

export default function ReleaseCard({image, title, date, author, content}) {
  return (
    <div className="release-card">
      <Img
        className="preview-image"
        fluid={image}
        alt={title}
        style={{width: "30vw", margin: "20px"}}
      />
      <div className="text-container">
        <h3 style={{gridArea: "top"}}>{title}</h3>
        <h3 style={{gridArea: "left"}}>{date}</h3>
        <h3 style={{gridArea: "right"}}>author</h3>
        <p style={{gridArea: "bottom", textAlign: "end"}}>{content}</p>
      </div>
    </div>
  )
}
