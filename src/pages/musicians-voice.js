import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/fixed/layout'
import LinkListBlog from '../components/link-lists/link-list-blog'
import SEO from '../components/seo'

export default function MusiciansVoice({data}) {
  return(
    <Layout>
      <SEO title="Blog"/>
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
