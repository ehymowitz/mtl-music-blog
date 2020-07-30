import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function BlogPost({data}) {
  const content = data.contentfulBlogPost.content.json
  const title = data.contentfulBlogPost.title
  const cover = data.contentfulBlogPost.coverPhoto.fluid

  return(
    <div>
      <h1 className="blog-post-title">{title}</h1>
      <Img className="blog-post-image" style={{maxWidth: "50vw"}} fluid={cover}/>

      <div className="blog-post-content">
        {documentToReactComponents(content)}
      </div>

      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export const blogPostQuery = graphql`
  query blogPostQuery( $id : String! ) {
    contentfulBlogPost( id: { eq: $id } ) {
      id
      content {
        json
      }
      title
      coverPhoto {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
