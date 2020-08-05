if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './.env.development'})
}

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
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
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder. Update
  },
}
