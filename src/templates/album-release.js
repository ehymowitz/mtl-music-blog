import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"

export default function AlbumRelease({data}) {
  // const content = data.contentfulAlbumRelease.content.json
  // const title = data.contentfulAlbumRelease.title
  // const cover = data.contentfulAlbumRelease.albumCover.fluid

  // TODO: Show author and date, additional photos.

  return(
    <Layout>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const albumReleaseQuery = graphql`
  query albumReleaseQuery( $id : String! ) {
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

      // <h1 className="album-release-title">{title}</h1>
      // <Img className="album-cover" style={{maxWidth: "50vw"}} fluid={cover}/>

      // <div className="album-release-content">
      //   {documentToReactComponents(content)}
      // </div>
