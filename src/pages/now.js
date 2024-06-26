import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
      {/* <h2>Doing</h2> */}
      <p>As of June 2024, I</p>
      <ul>
        <li>Live in Minnesota</li>
        <li>Build identity products at Mastercard</li>
        {/* <li>Publish <a href="https://www.productfield.guide/" target="_blank" rel="noreferrer">Product Field Guide</a>, a weekly newsletter about product management</li> */}
        <li>Have climbed 46 of the 50 <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoints</a></li>
        <li>Write speculative fiction stories</li>
      </ul>
      {/* <h2>Reading</h2> */}
      {/* <p>Thus far in 2023, I've read</p> */}
      {/* <ol> */}
      {/*   <li><i>Cat's Cradle</i> by Kurt Vonnegut</li> */}
      {/*   <li><i>The Joy Luck Club</i> by Amy Tan</li> */}
      {/*   <li><i>What's Our Problem?</i> by Tim Urban</li> */}
      {/*   <li><i>The Great Mental Models</i> by Shane Parrish</li> */}
      {/*   <li><i>Inferno</i> by Dante</li> */}
      {/*   <li><i>Purgatorio</i> by Dante</li> */}
      {/*   <li><i>Bluebeard</i> by Kurt Vonnegut</li> */}
      {/*   <li><i>Hercules</i></li> */}
      {/*   <li><i>Crossing the Unknown Sea</i> by David Whyte</li> */}
      {/*   <li><i>Welcome to the Monkey House</i> by Kurt Vonnegut</li> */}
      {/*   <li><i>The Time Keeper</i> by Mitch Albom</li> */}
      {/*   <li><i>Tenth of December</i> by George Saunders</li> */}
      {/*   <li><i>Writing Tools</i> by Roy Peter</li> */}
      {/*   <li><i>A Swim in a Pond in the Rain</i> by George Saunders</li> */}
      {/*   <li><i>This is Your Mind on Plants</i> by Michael Pollan</li> */}
      {/*   <li><i>Liberation Day</i> by George Saunders</li> */}
      {/*   <li><i>The Big Sleep</i> by Raymond Chandler</li> */}
      {/* </ol> */}
      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage