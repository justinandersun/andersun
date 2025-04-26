import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as blog from '../components/blog.module.css'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <h2>Hi there, I'm Justin</h2>
      <p>Thanks for visiting my website!</p>
      <p>I build tech <Link to="/projects">products</Link> and write <Link to="/fiction">fiction</Link>. You can learn more <Link to="/about">about</Link> me, see what I'm doing <Link to="/now">now</Link>, or read my <Link to="/blog">blog</Link>.</p>

      <p>Here's my latest post:</p>
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
      
      <h2>Subscribe</h2>
      <p>If you like what you read, sign up for my newsletter, <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>. Each month, I publish a new essay about <i>slow ideas for fast times</i>.</p>

      <h2>Contact</h2>
      <p>I appreciate the async nature of email, and I try to respond to messages within 24 hours. Email <b>hello</b> at <b>andersun</b> dot <b>com</b>. I'd love to hear from you!</p>
    
      
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