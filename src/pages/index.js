import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <h2>Hi, I'm Justin</h2>
      <p>Thanks for visiting my website!</p>
      <p>I build tech products and write fiction. To learn more, you can read <Link to="/about">about me</Link>, see what I'm doing <Link to="/now">now</Link>, or browse my <Link to="/blog">blog</Link>.</p>

      <h2>Latest Articles</h2>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <p><Link to={`/../${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></p>
          </article>
        ))
      }
      
      <h2>Contact</h2>
      <p>If you'd like to chat, send a message to <b>hello@andersun.com</b>.</p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      limit: 3
      filter: {frontmatter: {type: {eq: "article"}}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMM YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage