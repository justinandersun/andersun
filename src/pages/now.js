import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
    <h2>Now</h2>
      <p>As of February 2026, I am:</p>
      <ul>
        <li>Leading a product team at Mastercard</li>
        <li>Writing the first draft of a novel about the Underworld</li>
        <li>Facilitating the <a href="https://www.inkyloons.com/" target="_blank" rel="noreferrer">Inky Loons</a> writing group in Minneapolis</li>
        <li>Learning archery</li>
        <li>Procrastinating my final <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoint</a>: Denali</li>
      </ul>
      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage