import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/fixed/layout"
import LinkListRelease from '../components/link-lists/link-list-release'

export default function NewReleases({data}) {
  return(
    <Layout>
      <h2>New Releases</h2>
      <LinkListRelease data = {data} />
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
