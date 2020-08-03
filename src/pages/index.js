import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/fixed/layout"
import LinkListHome from "../components/link-lists/link-list-home"

export default function Home({data}) {
  return (
    <Layout>
      <LinkListHome data={data} />
    </Layout>
  )
}

// TODO: Sort by date

export const homeQuery = graphql`
  query homeQuery {
    albumReleases: allContentfulAlbumRelease(limit: 1000) {
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
    blogPosts: allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          author
          date
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

