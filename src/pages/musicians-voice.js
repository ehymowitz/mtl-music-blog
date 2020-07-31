import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/fixed/layout"

export default function MusiciansVoice({data}) {
  console.log(data)
  return(
    <Layout>
      <p>Musicians Voice</p>
    </Layout>
  )
}

// TODO: Display data, query more data

export const blogQuery = graphql`
  query blogQuery {
    allContentfulBlogPost(limit: 1000){
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
