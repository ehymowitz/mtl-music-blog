if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './.env.development'})
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "oeviph464mr3",
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      }
    }
  ],
  siteMetadata: {
    title: "THE SOUND GAP",
    titleTemplate: "%s · THE SOUND GAP",
    description:
      "A place for artists to be seen and heard",
    url: "https://www.doe.com", // No trailing slash allowed! Update
    image: "/pictures/THESOUNDGAP.png",
  },
}
