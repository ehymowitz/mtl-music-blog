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

export const albumQuery = graphql`
  query albumQuery {
    allContentfulAlbumRelease(limit: 1000){
      edges {
        node {
          id
          author
          date
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
