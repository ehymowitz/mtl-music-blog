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

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
        `
          {
            allContentfulPage(limit: 1000) {
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
      const pageTemplate = path.resolve(`./src/templates/subpage.js`)
        _.each(result.data.allContentfulPage.edges, edge => {
          createPage({
            path: `/pages/${slugify(edge.node.title, slugifyOptions)}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id
            },
          })
        })
      resolve()
    })
  })
}
