import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const fullTitle = `${title} | ${data.site.siteMetadata.title}`
  const metaDescription = description || data.site.siteMetadata.description

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </>
  )
}

export default Seo
