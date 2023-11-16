import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
      <p>As of November 2023, I am</p>
      <ul>
        <li>30 years old</li>
        <li>Living in Seattle, Washington</li>
        <li>Building identity verification products at Mastercard</li>
        <li>Writing <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>, a newsletter about making things</li>
        <li>Climbing the 50 <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoints</a> (I've summitted 44)</li>
        <li>Practicing non-dualistic meditation</li>
      </ul>
      <p>Thus far in 2023, I have</p>
      <ul>
        <li>Skied a half-dozen mountains in the Cascades</li>
        <li>Snorkeled between two tectonic plates in Iceland</li>
        <li>Launched <a href="https://model.garden/" target="_blank" rel="noreferrer">Model Garden</a>, a repository of mental models</li>
        <li>Climbed (but did not summit) Mount Whitney</li>
        <li>Published "<a href="https://www.quillkeeperspress.com/the-aerial-perspective-literary-journal/1-2-2nd-quarter-2023" target="_blank" rel="noreferrer">Lemon-Lime Lady</a>," a story about sparkling water</li>
        <li>Summitted Granite Peak, Montana's highpoint</li>
        <li>Summitted Katahdin, Maine's highpoint</li>
      </ul>
      <p>In 2023, I began reading with breakfast. Thus far I've read</p>
      <ol>
        <li><i>Cat's Cradle</i> by Kurt Vonnegut</li>
        <li><i>The Joy Luck Club</i> by Amy Tan</li>
        <li><i>What's Our Problem?</i> by Tim Urban</li>
        <li><i>The Great Mental Models</i> by Shane Parrish</li>
        <li><i>Inferno</i> by Dante</li>
        <li><i>Purgatorio</i> by Dante</li>
        <li><i>Bluebeard</i> by Kurt Vonnegut</li>
        <li><i>Hercules</i></li>
        <li><i>Crossing the Unknown Sea</i> by David Whyte</li>
        <li><i>Welcome to the Monkey House</i> by Kurt Vonnegut</li>
        <li><i>The Time Keeper</i> by Mitch Albom</li>
        <li><i>Tenth of December</i> by George Saunders</li>
        <li><i>Writing Tools</i> by Roy Peter</li>
        <li><i>A Swim in a Pond in the Rain</i> by George Saunders</li>
        <li><i>This is Your Mind on Plants</i> by Michael Pollan</li>
      </ol>
      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage