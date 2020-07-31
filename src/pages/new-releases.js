import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/fixed/layout"

export default function NewReleases({data}) {
  console.log(data)
  return(
    <Layout>
      <p>New Releases</p>
    </Layout>
  )
}

// TODO: Display data, query more data

export const albumQuery = graphql`
  query albumQuery {
    allContentfulAlbumRelease(limit: 1000){
      edges {
        node {
          id
          title
          albumCover {
            fixed(width: 100) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`
