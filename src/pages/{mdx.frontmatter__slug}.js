import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as blog from '../components/blog.module.css'
import Seo from '../components/seo'

const BlogPost = ({ data, children }) => {
  const { title, subtitle, date } = data.mdx.frontmatter
  // Essays are sorted newest first, so the older one comes after this one.
  const essays = data.allMdx.nodes
  const index = essays.findIndex((node) => node.id === data.mdx.id)
  const older = index >= 0 ? essays[index + 1] : null
  const newer = index > 0 ? essays[index - 1] : null
  return (
    <Layout pageTitle={title}>
      <p className={blog.date}>{date}</p>
      <h2 className={blog.title}>{title}</h2>
      {subtitle && <p className={blog.postSubtitle}>{subtitle}</p>}
      {children}
      {(older || newer) && (
        <nav className={blog.pager}>
          {older && (
            <Link to={`/${older.frontmatter.slug}`} className={blog.older}>
              <span className={blog.pagerLabel}>&larr; Previous</span>
              {older.frontmatter.title}
            </Link>
          )}
          {newer && (
            <Link to={`/${newer.frontmatter.slug}`} className={blog.newer}>
              <span className={blog.pagerLabel}>Next &rarr;</span>
              {newer.frontmatter.title}
            </Link>
          )}
        </nav>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        subtitle
        date(formatString: "DD MMMM YYYY")
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC }}
      filter: {frontmatter: {type: {eq: "article"}}}
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.subtitle} />

export default BlogPost
