import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as blog from '../components/blog.module.css'
import Seo from '../components/seo'

const BlogPost = ({ data, children }) => {
  const { title, subtitle, date } = data.mdx.frontmatter
  return (
    <Layout pageTitle={title}>
      <p className={blog.date}>{date}</p>
      <h2 className={blog.title}>{title}</h2>
      {subtitle && <p className={blog.postSubtitle}>{subtitle}</p>}
      {children}
      <p className={blog.closing}>If you enjoyed this, <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a> sends essays like it about once a month.</p>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        subtitle
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.subtitle} />

export default BlogPost
