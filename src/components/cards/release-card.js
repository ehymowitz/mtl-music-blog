import React from 'react'
import Img from 'gatsby-image'

export default function ReleaseCard({image, title, date, author, content}) {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0,no_words).join(" ");
  }

  return (
    <div className="release-card">
      <Img
        className="preview-image"
        fluid={image}
        alt={title}
      />
      <div className="text-container">
        <h3 style={{gridArea: "top", marginBottom: "10px"}}>{title}</h3>
        <h3 style={{gridArea: "left", textAlign: "center"}}>{date}</h3>
        <h3 style={{gridArea: "right", textAlign: "center"}}>{author}</h3>
        <p style={{
          gridArea: "bottom",
          margin: "0",
          marginTop: "10px",
          overflowY: "scroll"}}
        >
          {`${truncate(content,30)}...`}</p>
      </div>
    </div>
  )
}
