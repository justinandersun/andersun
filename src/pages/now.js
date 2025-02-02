import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
    <h2>What I'm doing now</h2>
      <p>As of February 2025, I:</p>
      <ul>
        <li>Am 31</li>
        <li>Live in Minnesota</li>
        <li>Lead a product team at a credit card company</li>
        <li>Publish essays about philosophy on <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a></li>
        <li>Am writing a novel about the Underworld</li>
        <li>Have summitted 48 of the 50 <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoints</a>. I have not yet climbed Gannett Peak in Wyoming and Denali in Alaska</li>
      </ul>

      <p>This year, I have read (or am reading):</p>
      <ul>
        <li><i>The Great Gatsby</i> by F. Scott Fitzgerald</li>
        <li><i>Slow Productivity</i> by Cal Newport</li>
        <li><i>Walden & Civil Disobedience</i> by Henry David Thoreau</li>
      </ul>

      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage