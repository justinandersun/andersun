import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
    <h2>Now</h2>
      <p>As of February 2025, I am:</p>
      <ul>
        <li>Living in Minnesota.</li>
        <li>Leading a product team at a credit card company.</li>
        <li>Publishing essays about philosophy on <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>.</li>
        <li>Writing a novel about the Underworld.</li>
        <li>Climbing the <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoints</a> (I've summitted 48 of 50).</li>
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