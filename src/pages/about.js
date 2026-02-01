import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h2>About me</h2>
      <p>A few notes, for context:</p>
      <p><b>Re: Work</b> — I build technology products, with a focus on machine learning and data-heavy systems. I'm interested in tools that encourage care and accountability.</p>
      <p><b>Re: Disposition</b> — By most measures, I'm conscientious, neurotic, agreeable, and open to new experiences. I like long walks and conversations that meander late into the night.</p>
      <p><b>Re: Roots</b> — I'm from Michigan (go blue!), a practicing Catholic, and a regular blood donor.</p>
      <p><b>Re: Interests</b> — I write fiction and enjoy mountaineering. Once upon a time, I could ride a unicycle.</p>
  
      <p>Find me on <a href="https://substack.com/@andersun" target="_blank" rel="noreferrer">Substack</a>
        , <a href="https://github.com/justinandersun/" target="_blank" rel="noreferrer">GitHub</a>
        , <a href="https://www.linkedin.com/in/justinandersun/" target="_blank" rel="noreferrer">LinkedIn</a>
        , <a href="https://www.youtube.com/user/justinandersun" target="_blank" rel="noreferrer">YouTube</a>, and <a href="https://www.goodreads.com/user/show/23702091-justin-andersun" target="_blank" rel="noreferrer">Goodreads</a>.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage