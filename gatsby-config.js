require("dotenv").config({  
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {  
  siteMetadata: {
    title: "Circolo Nadir",
    description: "Sito web del circolo Nadir",
    author: "Alessandro",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "https://nadir-backend.herokuapp.com",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "section",
          "category",
          "event",
          "article",
          "page",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png"
      },
    },
    "gatsby-plugin-offline",
  ],
}