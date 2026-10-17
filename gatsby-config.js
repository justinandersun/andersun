module.exports = {
  siteMetadata: {
    title: "Justin Andersun",
    description: "The personal blog of Justin Andersun, solopreneur and fiction writer.",
    siteUrl: `https://www.andersun.com/`,
    tags: "product management, fiction writing, indie making, highpointing",
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
    // RSS Feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map((node) => {
                const url = new URL(`/${node.frontmatter.slug}/`, site.siteMetadata.siteUrl).href
                return {
                  title: node.frontmatter.title,
                  description: node.frontmatter.subtitle || node.excerpt,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                }
              }),
            query: `
              {
                allMdx(
                  sort: { frontmatter: { date: DESC } }
                  filter: { frontmatter: { type: { eq: "article" } } }
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      subtitle
                      slug
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Justin Andersun",
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