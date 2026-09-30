import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
    <h2>Now</h2>
      <p>As of October 2026, I am:</p>
      <ul>
        <li>Growing <a href="https://www.stu.tools/" target="_blank" rel="noreferrer">Stu</a>, a home maintenance app</li>
        <li>Writing the <s>first</s> second draft of my novel, <i>Frozen Furnace</i></li>
        <li>Preparing for the birth of my first child!</li>
        <li>Postponing my final <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoint</a>: Denali</li>
      </ul>
      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage