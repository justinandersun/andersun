import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
      <p>As of October 2024, I am:</p>
      <ul>
        <li>Living in Minnesota</li>
        <li>Leading a product team at a credit card company</li>
        <li>Climbing the <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">U.S. Highpoints</a> (I've summitted 48 of 50)</li>
        <li>Writing speculative fiction stories</li>
        <li>Reading literature and philosophy from the Western canon</li>
      </ul>
      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage