require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "oeviph464mr3",
        accessToken: 'cM8KDAPGKAZYlFAGCDzVU0_w7bTEWfBJUd88KOPZK9w',
      }
    }
  ],
}
