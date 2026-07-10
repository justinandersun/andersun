import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
    <h2>Now</h2>
      <p>As of July 2026, I am:</p>
      <ul>
        <li>Launching <a href="https://www.stu.tools/" target="_blank" rel="noreferrer">Stu</a>, a stewardship system for your home</li>
        <li>Neck deep in DIY home projects, such as building a garden fence and installing LVP floors</li>
        <li>Writing the <s>first</s> second draft of my novel, <i>Frozen Furnace</i></li>
        <li>Mountain biking and kayaking in the Land of 10,000 Lakes</li>
        <li>Procrastinating my final <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoint</a>: Denali</li>
      </ul>
      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage