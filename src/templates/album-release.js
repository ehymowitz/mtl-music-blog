import React from 'react'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/fixed/layout"

export default function AlbumRelease({data}) {
  const content = data.contentfulAlbumRelease.content.json
  const title = data.contentfulAlbumRelease.title
  const cover = data.contentfulAlbumRelease.albumCover.fluid
  const author = data.contentfulAlbumRelease.author
  const date = data.contentfulAlbumRelease.date
  const additionalPhoto1 = data.contentfulAlbumRelease.additionPhoto1

  return(
    <Layout>
      <h1 className="album-release-title">{title}</h1>
      <h2>{author}</h2>
      <h2>{date}</h2>
      {additionalPhoto1 !== null && <Img style={{maxWidth: "50vw"}} fluid={additionalPhoto1.fluid}/>}
      <Img className="album-cover" style={{maxWidth: "50vw"}} fluid={cover}/>

      <div className="album-release-content">
        {documentToReactComponents(content)}
      </div>
    </Layout>
  )
}

// TODO: Eventually change query to find addtional photos

export const albumReleaseQuery = graphql`
  query albumReleaseQuery( $id : String! ) {
    contentfulAlbumRelease( id: { eq: $id } ) {
      id
      author
      date
      content {
        json
      }
      title
      albumCover {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      additionPhoto1 {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

