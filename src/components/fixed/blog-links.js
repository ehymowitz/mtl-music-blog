import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'

const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

export default function BlogLinks() {

  const posts = useStaticQuery(query)
  console.log(posts)
  return (
    <footer className="blog-links-menu">
      <ul>
        { posts.allContentfulBlogPost.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <Img fluid={node.node.coverPhoto.fluid}/>
              <div style={{textAlign: "center", marginTop:"5px"}}>
                <h3>{node.node.title}</h3>
                <p>{node.node.author}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

const query = graphql`
  query blogLinkQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          author
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
