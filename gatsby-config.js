require('dotenv').config();

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "oeviph464mr3",
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      }
    }
  ],
}
