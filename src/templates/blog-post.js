import React from 'react'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import { MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/fixed/layout"

export default function BlogPost({data}) {
  const content = data.contentfulBlogPost.content.json
  const title = data.contentfulBlogPost.title
  const cover = data.contentfulBlogPost.coverPhoto.fluid
  const author = data.contentfulBlogPost.author
  const date = data.contentfulBlogPost.date
  const additionalPhoto1 = data.contentfulBlogPost.additionalPhoto1
  const additionalPhoto2 = data.contentfulBlogPost.additionalPhoto2

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        if((text).includes("open.spotify")){
          const link = text.substring(text.search("src=")+5, text.search("width=")-2)
          return <iframe title={title} src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
        }
      }
    }
  }


  return(
    <Layout>
      <h1 className="blog-post-title">{title}</h1>
      <h2>{author}</h2>
      <h2>{date}</h2>
      {additionalPhoto1 !== null && <Img style={{maxWidth: "50vw"}} fluid={additionalPhoto1.fluid}/>}
      {additionalPhoto2 !== null && <Img style={{maxWidth: "50vw"}} fluid={additionalPhoto2.fluid}/>}
      <Img className="blog-post-image" style={{maxWidth: "50vw"}} fluid={cover}/>

      <div className="blog-post-content">
        {documentToReactComponents(content, options)}
      </div>
    </Layout>
  )
}

// TODO: Eventually add query for 3rd photo

export const blogPostQuery = graphql`
  query blogPostQuery( $id : String! ) {
    contentfulBlogPost( id: { eq: $id } ) {
      id
      author
      date
      title
      content {
        json
      }
      coverPhoto {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      additionalPhoto1 {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      additionalPhoto2 {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

