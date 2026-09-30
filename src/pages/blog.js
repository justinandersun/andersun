import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as blog from '../components/blog.module.css'
import * as page from '../components/page.module.css'

const featuredSlugs = ['cave', 'lose-the-rope', 'festina']

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
  const featured = featuredSlugs
    .map((slug) => data.allMdx.nodes.find((node) => node.frontmatter.slug === slug))
    .filter(Boolean)

  return (
    <Layout pageTitle="Blog">
      <p>Here you'll find my essays on philosophy and building things. New pieces go out through <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a> about once a month. If you're new here, start with one of these:</p>
      <div className={blog.start}>
        <p className={blog.label}>Start here</p>
        <ul className={page.index}>
          {featured.map((node) => (
            <li className={page.row} key={node.id}>
              <div>
                <Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                {node.frontmatter.subtitle && <span className={page.subtitle}>{node.frontmatter.subtitle}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {sortedYears.map((year, i) => (
        <details className={blog.year} key={year} open={i === 0}>
          <summary>
            <span className={blog.yearName}>{year}</span>
            <span className={blog.count}>· {postsByYear[year].length} {postsByYear[year].length === 1 ? 'essay' : 'essays'}</span>
          </summary>
          <ul className={page.index}>
            {postsByYear[year].map((node) => (
              <li className={page.row} key={node.id}>
                <div>
                  <Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                  {node.frontmatter.subtitle && <span className={page.subtitle}>{node.frontmatter.subtitle}</span>}
                </div>
                <span className={page.rowDate}>{node.frontmatter.date.slice(0, -5)}</span>
              </li>
            ))}
          </ul>
        </details>
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
          subtitle
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage