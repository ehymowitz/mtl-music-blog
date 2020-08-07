import React from "react"
import Link from "gatsby-link"
import slugify from 'slugify'
import HomeCard from '../cards/home-card'

const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// TODO: Check sorted by date

export default function LinkListHome({data}) {
  return(
    <div className="home-links">
      <div style={{
        width: "50%",
        textAlign: "center",
        position: "relative"}}>
        <h2>&nbsp;&nbsp;BLOG</h2>
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
      </div>
      <div style={{
        width: "50%",
        textAlign: "center",
        position: "relative"
      }}>
        <h2>RELEASES</h2>
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
    </div>
  )
}

