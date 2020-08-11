import React from 'react'
import Img from 'gatsby-image'

export default function BlogCard({image, title, date, author}) {
  return (
    <div className="blog-card">
      <Img fluid={image}/>
      <div className="hover-text">
        <p>{title}</p>
        <p><i>{date}</i></p>
        <p>{author}</p>
      </div>
    </div>
  )
}
