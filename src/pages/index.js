import React from "react"
import Link from 'gatsby-link'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import slugify from 'slugify'
import Layout from "../components/layout"

const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// TODO: Refactor list to use components

export default function Home({data}) {

  return (
    <Layout>
      <ul className="link-list blog-posts-links">
        { data.blogPosts.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <Img fixed={node.node.coverPhoto.fixed}/>
              {node.node.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="link-list album-release-links">
        { data.albumReleases.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <Img fixed={node.node.albumCover.fixed}/>
              {node.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

// TODO: Add same limit as gatsby-node.js limit here?

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
