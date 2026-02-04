import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  const postsByYear = data.allMdx.nodes.reduce((acc, node) => {
    const year = node.frontmatter.date.slice(-4)
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(node)
    return acc
  }, {})

  const sortedYears = Object.keys(postsByYear).sort((a, b) => b - a)

  return (
    <Layout pageTitle="Blog">
      <h2>Blog</h2>
      {sortedYears.map((year) => (
        <div key={year}>
          <h3>{year}</h3>
          <ul>
            {postsByYear[year].map((node) => (
              <li key={node.id}>
                {node.frontmatter.date.slice(0, -5)}: <Link to={`/../${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC }}
      filter: {frontmatter: {type: {eq: "article"}}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMM YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage