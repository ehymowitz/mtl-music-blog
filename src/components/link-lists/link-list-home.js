import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import slugify from 'slugify'

const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// TODO: Refactor to use cards. Check sorted by date

export default function LinkListHome({data}) {
  return(
    <div>
      <h2>Blog Posts</h2>
      <ul className="link-list blog-posts-links">
        { data.blogPosts.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <Img fixed={node.node.coverPhoto.fixed}/>
              {node.node.title}
              {node.node.date}
              {node.node.author}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Album Releases</h2>
      <ul className="link-list album-release-links">
        { data.albumReleases.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <Img fixed={node.node.albumCover.fixed}/>
              {node.node.title}
              {node.node.date}
              {node.node.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

