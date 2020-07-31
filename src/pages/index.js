import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import LinkListHome from "../components/link-list-home"

export default function Home({data}) {
  return (
    <Layout>
      <LinkListHome data={data} />
    </Layout>
  )
}

// TODO: Include date and author data. Sort by date

export const homeQuery = graphql`
  query homeQuery {
    albumReleases: allContentfulAlbumRelease(limit: 1000) {
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
    blogPosts: allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          coverPhoto {
            fixed(width: 100) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

