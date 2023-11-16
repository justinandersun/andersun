import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Hi, I'm Justin, and welcome to my website!</p>
      <p>In short: I manage products, write fiction, and make websites.</p>
      <p>You can learn more on my <Link to="/about">About Page</Link>, see what I'm up to on my <Link to="/now">Now Page</Link>, or check out my newsletter, <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>, which I publish fortnightly (roughly every other Tuesday).</p>
      <p>Here's my latest blog post:</p>
      <p>If you'd like to chat, send me an email. My address is `justin` at this domain. Please do not add me to mailing lists :)</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage