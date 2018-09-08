module.exports = {
  siteMetadata: {
    title: "Clark Newell",
    author: "Hunter Chang and Clark Newell",
    description: "Clark Newell personal site based on Gatsby.js V2 Starter & Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/MtnLogo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
