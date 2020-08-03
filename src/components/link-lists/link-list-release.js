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

export default function LinkListRelease({data}) {
  return(
    <div>
      <ul className="link-list-release album-release-links">
        { data.allContentfulAlbumRelease.edges.map((node, i) => (
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
