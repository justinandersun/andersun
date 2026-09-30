import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as letter from '../components/letter.module.css'
import Seo from '../components/seo'
import Email from '../components/email'

const IndexPage = ({ data }) => {
  const latest = data.allMdx.nodes[0]
  return (
    <Layout pageTitle="Home">
      <p className={letter.salutation}>Dear Reader,</p>
      <p>Welcome to my website, and thanks for visiting! I'm Justin, and I build <Link to="/projects/">software products</Link> and write <Link to="/fiction/">fiction</Link>. You can learn more <Link to="/about/">about me</Link> or see what I'm up to <Link to="/now/">now</Link>.</p>
      <p>
        {latest && <>My latest essay is <Link to={`/${latest.frontmatter.slug}`}>{latest.frontmatter.title}</Link>. </>}
        If you like what you read, sign up for <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>, where I post about once per month.
      </p>
      <p>If you'd like to write back, send an email to <Email />. I'd love to hear from you.</p>
      <p className={letter.signoff}>Take care,<br />Justin</p>
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
          title
          slug
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage