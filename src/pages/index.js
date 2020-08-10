import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/fixed/layout'
import LinkListHome from '../components/link-lists/link-list-home'
import SEO from '../components/seo'

export default function Home({data}) {
  return (
    <Layout>
      <SEO title="Home"/>
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
          date(formatString: "MMMM DD, YYYY")
          title
          albumCover {
            fluid {
              ...GatsbyContentfulFluid_withWebp
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
          date(formatString: "MMMM DD, YYYY")
          title
          coverPhoto {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

