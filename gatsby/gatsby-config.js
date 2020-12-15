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
  ],
};
