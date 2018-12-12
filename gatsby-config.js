module.exports = {
  siteMetadata: {
    title: "Clark Newell",
    author: "Clark Newell and Hunter Chang",
    description: "Clark Newell Web Development Profile, Portfolio and Contact Form",
    keywords: "Clark Newell, Web Developer, Web Development, Software Engineer, JavaScript, React, GatsbyJS",
    siteUrl: "https://clarknewell.tech"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'clark-newell-personal-app',
        short_name: 'clark-newell',
        start_url: '/',
        background_color: '#F39121',
        theme_color: '#F39121',
        display: 'minimal-ui',
        icon: 'src/images/MtnLogo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
