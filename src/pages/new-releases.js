import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/fixed/layout"
import LinkListRelease from '../components/link-lists/link-list-release'
import SEO from "../components/seo"

export default function NewReleases({data}) {
  return(
    <Layout>
      <SEO title="New Releases"/>
      <LinkListRelease data = {data} />
    </Layout>
  )
}

export const albumQuery = graphql`
  query albumQuery {
    allContentfulAlbumRelease(limit: 1000){
      edges {
        node {
          content{
            json
          }
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
  }
`
