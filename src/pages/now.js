import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
    <h2>What I'm doing now</h2>
      <p>As of September 2025, I:</p>
      <ul>
        <li>Am 32</li>
        <li>Live in Minnesota</li>
        <li>Lead a product team at a credit card company</li>
        <li>Publish philosopical essays on <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a></li>
        <li>Am writing a novel about the Underworld</li>
        <li>Have summitted 49 of the 50 <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoints</a>. I have not yet climbed Denali in Alaska</li>
      </ul>
      <p>This year, I have read:</p>
      <ul>
        <li><i>The Great Gatsby</i> by F. Scott Fitzgerald</li>
        <li><i>Slow Productivity</i> by Cal Newport</li>
        <li><i>Walden</i> by Henry David Thoreau</li>
        <li><i>Circe</i> by Madeline Miller</li>
        <li><i>If On A Winter's Night A Traveler</i> by Italo Calvino</li>
        <li><i>Abundance</i> by Ezra Klein</li>
        <li><i>A Short Stay in Hell</i> by Steven Peck</li>
        <li><i>Into Thin Air</i> by Jon Krakauer</li>
        <li><i>Watership Down</i> by Richard Adams</li>
        <li><i>Storyworthy</i> by Matthew Dicks</li>
        <li><i>Coopersville to Korea</i> by Keith Anderson (my dad)</li>
        <li><i>The Nicomachean Ethics</i> by Aristotle</li>
      </ul>
      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage