const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const slugify = require(`slugify`)
const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // Create Album Releases
    graphql(
      `
        {
          allContentfulAlbumRelease(limit: 1000) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `
    )
    .then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      const pageTemplate = path.resolve(`./src/templates/album-release.js`)
        _.each(result.data.allContentfulAlbumRelease.edges, edge => {
          createPage({
            path: `/posts/${slugify(edge.node.title, slugifyOptions)}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id
            },
          })
        })
      resolve()
    })
    // Create Blogs Posts
    .then(() => {
      graphql(
        `
          {
            allContentfulBlogPost(limit: 1000) {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        `
      )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const postTemplate = path.resolve(`./src/templates/blog-post.js`)
          _.each(result.data.allContentfulBlogPost.edges, edge => {
        createPage({
          path: `/posts/${slugify(edge.node.title, slugifyOptions)}/`,
          component: slash(postTemplate),
          context: {
            id: edge.node.id
          },
        })
      })
        resolve()
      })
    })
  })
}
