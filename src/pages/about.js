import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h2>About me</h2>
      <p>I am a husband, brother, son, grandson, friend, cousin, nephew, product manager, writer, and maker - in that order.</p>

      <p>I build products to combat identity fraud.</p>
      
      <p>I write speculative <Link to="/fiction">fiction stories</Link>.</p>
      
      <p>I make informative <Link to="/projects">web tools</Link>.</p>
            
      <p>Among the Big Five personality traits, I am:</p>
      <ul>
        <li>More introverted than extroverted</li>
        <li>Highly conscientious and obsessively organized</li>
        <li>Fairly agreeable (becoming less so with age)</li>
        <li>Neurotic and moody</li>
        <li>Thrill-seeking and open to new experiences</li>
      </ul>
      
      <p>Some other things about me:</p>
      <ul>
        <li>I love long, meandering walks and conversations</li>
        <li>I wear shoes even after they get holes in them</li>
        <li>I laugh easily (and often uncontrollably)</li>
        <li>I enjoy hiking, biking, climbing, skiing, and camping</li>
        <li>I donate blood twice per year</li>
        <li>I am Catholic</li>
        <li>I am from Michigan and a proud Wolverine</li>
        <li>I am a night owl who wishes to be a morning bird</li>
        <li>I film <a href="https://www.youtube.com/user/justinandersun" target="_blank" rel="noreferrer">one-second daily videos</a></li>
        <li>I can unicycle and juggle but am better at the former</li>
      </ul>
      <p>Find me on <a href="https://substack.com/@andersun" target="_blank" rel="noreferrer">Substack</a>
        , <a href="https://github.com/justinandersun/" target="_blank" rel="noreferrer">GitHub</a>
        , <a href="https://www.linkedin.com/in/justinandersun/" target="_blank" rel="noreferrer">LinkedIn</a>
        , and <a href="https://www.goodreads.com/user/show/23702091-justin-andersun" target="_blank" rel="noreferrer">Goodreads</a>.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage