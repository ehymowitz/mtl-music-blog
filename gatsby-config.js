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
        accessToken: process.env.CONTENTFUL_API_TOKEN
      }
    }
  ],
}
