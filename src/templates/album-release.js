import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function AlbumRelease({data}) {
  const content = data.contentfulAlbumRelease.content.json
  const title = data.contentfulAlbumRelease.title
  const cover = data.contentfulAlbumRelease.albumCover.fluid

  return(
    <div>
      <h1 className="album-release-title">{title}</h1>
      <Img style={{maxWidth: "50vw"}} fluid={cover}/>

      <div className="album-release-content">
        {documentToReactComponents(content)}
      </div>

      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export const pageQuery = graphql`
  query pageQuery( $id : String! ) {
    contentfulAlbumRelease( id: { eq: $id } ) {
      id
      content {
        json
      }
      title
      albumCover {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
