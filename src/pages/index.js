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

// TODO: Add same limit as gatsby-node.js limit here?
// Include date and author data

export const homeQuery = graphql`
  query homeQuery {
    albumReleases: allContentfulAlbumRelease(sort: {fields: createdAt, order: ASC}) {
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
    blogPosts: allContentfulBlogPost(sort: {fields: createdAt, order: ASC}) {
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

