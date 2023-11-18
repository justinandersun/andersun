import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <h2>Hi, I'm Justin</h2>
      <p>Thanks for visiting my website!</p>
      <p>I build products and write fiction. To learn more, you can read <Link to="/about">about me</Link>, see what I'm doing <Link to="/now">now</Link>, or browse my <Link to="/blog">blog</Link>.</p>

      <h2>Latest Articles</h2>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <p><Link to={`/../${node.frontmatter.slug}`}>{node.frontmatter.title}</Link> ({node.frontmatter.date})</p>
          </article>
        ))
      }

      <h2>Most Popular Articles</h2>
      <p><Link to="/garden">The Garden</Link></p>
      <p><Link to="/garden">The Garden</Link></p>
      <p><Link to="/garden">The Garden</Link></p>

      <h2>The Garden</h2>
      <p>Feeling adventurous? Take a stroll through <Link to="/garden">The Garden</Link> to explore my collection of notes, observations, and emerging ideas.</p>

      <h2>Contact</h2>
      <p>If you'd like to chat, send an email to `justin` at this domain.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
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