module.exports = {
  siteMetadata: {
    title: "Justin Andersun",
    description: "The personal blog of Justin Andersun, product manager and fiction writer.",
    siteUrl: `https://www.andersun.com`,
    tags: "product manager, speculative fiction writer, indie maker, highpointer",
    twitterUsername: "@justinandersun",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // Blog Directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      }
    },
    // Images
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    // HTML Attributes
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-GGPS849D7N",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};