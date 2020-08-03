import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/fixed/layout"
import LinkListBlog from '../components/link-lists/link-list-blog'

export default function MusiciansVoice({data}) {
  return(
    <Layout>
      <h2>Musicians Voice</h2>
      <LinkListBlog data={data}/>
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
