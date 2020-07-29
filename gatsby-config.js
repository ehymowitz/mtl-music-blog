module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "oeviph464mr3",
        accessToken: 'cM8KDAPGKAZYlFAGCDzVU0_w7bTEWfBJUd88KOPZK9w',
      }
    }
  ],
}
