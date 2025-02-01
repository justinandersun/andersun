import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as blog from '../components/blog.module.css'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
    {
      data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <p className={blog.date}>{node.frontmatter.date}</p>
          <h2 className={blog.title}>{node.frontmatter.title}</h2>
          <p className={blog.excerpt}>{node.excerpt}
            <span className={blog.read}>
              <Link to={`/../${node.frontmatter.slug}`}> Read →</Link>
            </span>
          </p>
        </article>
      ))
    }
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