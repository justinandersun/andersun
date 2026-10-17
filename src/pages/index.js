import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as letter from '../components/letter.module.css'
import Seo from '../components/seo'
import Email from '../components/email'

// Set in the browser so the letter is always dated the day it's read.
const LetterDate = () => {
  const [today, setToday] = React.useState(null)

  React.useEffect(() => {
    setToday(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))
  }, [])

  return <p className={letter.date}>{today}</p>
}

const titles = [
  'Unpaid Intern, Quickhatch',
  'Amateur Mountaineer',
  'Chess Variant Extraordinaire',
  'Former Unicyclist',
  'Self-Published Essayist',
]

// Picked in the browser so each visit gets a fresh one.
const SignatureTitle = () => {
  const [title, setTitle] = React.useState(null)

  React.useEffect(() => {
    setTitle(titles[Math.floor(Math.random() * titles.length)])
  }, [])

  return <span className={letter.title}>{title}</span>
}

const IndexPage = ({ data }) => {
  const latest = data.allMdx.nodes[0]
  return (
    <Layout pageTitle="Home">
      <LetterDate />
      <p className={letter.salutation}>Dear Reader,</p>
      <p>Welcome to my website, and thanks for visiting! I'm Justin, and I build <Link to="/projects/">software products</Link> and write <Link to="/fiction/">fiction</Link>. You can learn more <Link to="/about/">about me</Link> or see what I'm up to <Link to="/now/">now</Link>.</p>
      <p>
        {latest && <>My latest essay is <Link to={`/${latest.frontmatter.slug}`}>{latest.frontmatter.title}</Link>. </>}
        If you like what you read, sign up for <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>, where I post about once per month.
      </p>
      <p>If you'd like to write back, send an email to <Email />. I'd love to hear from you.</p>
      <p className={letter.signoff}>Take care,<br /><span className={letter.signature}><span className={letter.initial}>J</span>ustin</span><br /><SignatureTitle /></p>
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