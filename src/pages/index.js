import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Hi, I'm Justin!</p>
      <p>I manage products, write fiction, and make websites.</p>
      <p>You can learn more on my <Link to="/about">about page</Link>, see what I've been doing on my <Link to="/now">now page</Link>, or browse my <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">newsletter</a> to see what I've been pondering.</p>
      <p>Latest Articles:</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>Most Popular Articles:</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>Feeling adventurous? Take a stroll through my <Link to="/garden">garden</Link> to explore my collection of notes, observations, and emerging ideas.</p>
      <p>If you'd like to chat, send an email to `justin` at this domain.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage