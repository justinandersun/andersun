import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as blog from '../components/blog.module.css'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <h2>Hi, I'm Justin</h2>
      <p>Thanks for visiting my website!</p>
      <p>I build tech products and write fiction. You can learn more <Link to="/about">about me</Link>, see what I'm doing <Link to="/now">now</Link>, or browse my <Link to="/blog">blog</Link>.</p>

      <h2>Latest Article</h2>
      {
        data.allMdx.nodes.map((node) => (
          <article className={blog.feature} key={node.id}>
            <p className={blog.date}>{node.frontmatter.date}</p>
            <p className={blog.title}>{node.frontmatter.title}</p>
            <p>{node.frontmatter.subtitle}</p>
            <p className={blog.read}>
              <Link to={`/../${node.frontmatter.slug}`}> Read →</Link>
            </p>
          </article>
        ))
      }
      
      <h2>Contact</h2>
      <p>Send an email to <b>hello</b> at <b>this domain</b>.</p>
    
      <h2>Subscribe</h2>
      <p>Sign up for my monthly newsletter, <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>!</p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      limit: 1
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
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage