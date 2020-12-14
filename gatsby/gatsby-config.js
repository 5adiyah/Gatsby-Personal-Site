// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
module.exports = {
  siteMetadata: {
    title: 'Sadiyah Ali',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [
          './src/styles/config/*.scss',
          './src/styles/layout/*.scss',
          './src/styles/global/*.scss',
          './src/styles/components/*.scss',
        ],
      },
    },
  ],
};
