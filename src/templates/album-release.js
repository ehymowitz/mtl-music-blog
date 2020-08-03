import React from 'react'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import { MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/fixed/layout"

export default function AlbumRelease({data}) {
  const content = data.contentfulAlbumRelease.content.json
  const title = data.contentfulAlbumRelease.title
  const cover = data.contentfulAlbumRelease.albumCover.fluid
  const author = data.contentfulAlbumRelease.author
  const date = data.contentfulAlbumRelease.date
  const additionalPhoto1 = data.contentfulAlbumRelease.additionalPhoto1
  const additionalPhoto2 = data.contentfulAlbumRelease.additionalPhoto2
  const additionalPhoto3 = data.contentfulAlbumRelease.additionalPhoto3

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        if((text).includes("open.spotify")){
          const link = text.substring(text.search("src=")+5, text.search("width=")-2)
          return <iframe title={title} src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
        }
      }
    }
  }

  return(
    <Layout>
      <h1 className="album-release-title">{title}</h1>
      <h2>{author}</h2>
      <h2>{date}</h2>
      {additionalPhoto1 !== null && <Img style={{maxWidth: "50vw"}} fluid={additionalPhoto1.fluid}/>}
      {additionalPhoto2 !== null && <Img style={{maxWidth: "50vw"}} fluid={additionalPhoto2.fluid}/>}
      {additionalPhoto3 !== null && <Img style={{maxWidth: "50vw"}} fluid={additionalPhoto3.fluid}/>}
      <Img className="album-cover" style={{maxWidth: "50vw"}} fluid={cover}/>
      <div className="album-release-content">
        {documentToReactComponents(content,options)}
      </div>
    </Layout>
  )
}

export const albumReleaseQuery = graphql`
  query albumReleaseQuery( $id : String! ) {
    contentfulAlbumRelease( id: { eq: $id } ) {
      id
      author
      date
      title
      content {
        json
      }
      albumCover {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      additionalPhoto1 {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      additionalPhoto2 {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      additionalPhoto3 {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

