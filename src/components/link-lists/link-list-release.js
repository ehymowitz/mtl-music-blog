import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'
import ReleaseCard from '../cards/release-card'
import Img from 'gatsby-image'

const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// TODO: Check sorted by date

export default function LinkListRelease({data}) {
  return(
    <div className="release-links">
      <Link
        to={`/posts/${slugify(data.allContentfulAlbumRelease.edges[0].node.title, slugifyOptions)}`}
        className="recent-article-image"
      >
        <div className="image-overlay"/>
        <Img
          fluid={data.allContentfulAlbumRelease.edges[0].node.albumCover.fluid}
        />
        <div className="recent-article-text">
          <h3>{data.allContentfulAlbumRelease.edges[0].node.title}</h3>
          <h3 style={{textAlign: "end", fontFamily: "Ubuntu, sans-serif", fontStyle: "none", fontWeight: "300", fontStyle: "italic"}}>{data.allContentfulAlbumRelease.edges[0].node.date}</h3>
          <h3 style={{textAlign: "end", fontFamily: "Ubuntu, sans-serif", fontStyle: "bold"}}>{data.allContentfulAlbumRelease.edges[0].node.author}</h3>
        </div>
      </Link>
      <ul className="album-release-link-list">
        {data.allContentfulAlbumRelease.edges.map((node, i) => (
          <li key={i}>
            <Link key={i} to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
              <ReleaseCard
                image={node.node.albumCover.fluid}
                title={node.node.title}
                date={node.node.date}
                author={node.node.author}
                content={node.node.content.json.content[0].content[0].value}
                />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
