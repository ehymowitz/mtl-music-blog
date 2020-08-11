import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import slugify from 'slugify'
import BlogCard from '../cards/blog-card'

const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// TODO: Check sorted by date

export default function LinkListBlog({data}) {
  return(
    <div className="blog-links">
      <ul className="album-release-link-list">
        { data.allContentfulBlogPost.edges.map((node, i) => (
          <li>
            <Link to={`/posts/${slugify(node.node.title, slugifyOptions)}`}>
            <BlogCard
              image={node.node.coverPhoto.fluid}
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
