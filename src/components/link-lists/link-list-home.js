import React from "react"
import Link from "gatsby-link"
import slugify from 'slugify'

import HomeCard from '../cards/home-card'

const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// TODO: Refactor to use cards. Check sorted by date

export default function LinkListHome({data}) {
  return(
    <div className="home-links">
      <h2>Blog Posts</h2>
      <ul className="home-link-list">
        { data.blogPosts.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <HomeCard
                fluid={node.node.coverPhoto.fluid}
                title={node.node.title}
                date={node.node.date}
                author={node.node.author}
              />
            </Link>
          </li>
        ))}
      </ul>
      <h2>Album Releases</h2>
      <ul className="home-link-list">
        { data.albumReleases.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <HomeCard
                fluid={node.node.albumCover.fluid}
                title={node.node.title}
                date={node.node.date}
                author={node.node.author}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

