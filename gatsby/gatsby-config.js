const globImporter = require('node-sass-glob-importer');

module.exports = {
  siteMetadata: {
    title: 'Sadiyah Ali',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        importer: globImporter(),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`100`, `300`, `400`, `700`, `900`],
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `500`, `600`, `700`, `800`, `900`],
          },
          {
            family: `Heebo`,
            variants: [`100`, `300`, `400`, `500`, `600`, `700`, `800`, `900`],
          },
          {
            family: `Advent Pro`,
            variants: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
  ],
};
