import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as page from '../components/page.module.css'

const NowPage = () => {
  return (
    <Layout pageTitle="Now">
      <p>As of <b>October 2026</b>, I am:</p>

      <h3 className={page.heading}>1. Growing Stu</h3>
      <p><a href="https://www.stu.tools/" target="_blank" rel="noreferrer">Stu</a> launched on the App Store in July, and I recently shipped cloud sync and backups. I'm focused on reaching first-time homeowners in the Twin Cities.</p>

      <h3 className={page.heading}>2. Writing <i>Frozen Furnace</i></h3>
      <p>I'm starting the second draft of my novel, incorporating the feedback from my generous writing group.</p>

      <h3 className={page.heading}>3. Preparing for fatherhood</h3>
      <p>My wife and I are excited for the arrival of our first child in February!</p>

      <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">now page</a>, and you can create one too.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />

export default NowPage
