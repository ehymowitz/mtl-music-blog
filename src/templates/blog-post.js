import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/fixed/layout'
import SEO from '../components/seo'
import BlogLinks from '../components/fixed/blog-links'

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
          return <iframe title={title} src={link} width="500" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
        }
      }
    }
  }

  return(
    <Layout>
      <SEO title="Blog Post" description={title} article={true} image={cover.src}/>
      <div className="blog-post">
        <div className="blog-post-content">
          <div className="blog-post-images">
            <Img className="blog-post-image" fluid={cover}/>
            <div className="blog-post-images-additional">
              {additionalPhoto1 !== null && <Img fluid={additionalPhoto1.fluid}/>}
              {additionalPhoto2 !== null && <Img fluid={additionalPhoto2.fluid}/>}
            </div>
          </div>
          <div className="blog-post-text">
            <h2 className="blog-post-title">{title}</h2>
            <div className="blog-post-details">
              <h3 style={{margin: "0px 20px"}}>{author}</h3>
              <h3 style={{margin: "0px 20px"}}>{date}</h3>
            </div>
            <div>{documentToReactComponents(content, options)}</div>
          </div>
        </div>
        <BlogLinks/>
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
      date(formatString: "MMMM DD, YYYY")
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

