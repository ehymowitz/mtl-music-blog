import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/fixed/layout'
import LinkListBlog from '../components/link-lists/link-list-blog'
import SEO from '../components/seo'

export default function MusiciansVoice({data}) {
  return(
    <Layout>
      <SEO title="Blog"/>
      <h2>Blog</h2>
      <LinkListBlog data={data}/>
    </Layout>
  )
}

export const blogQuery = graphql`
  query blogQuery {
    allContentfulBlogPost(limit: 1000){
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
