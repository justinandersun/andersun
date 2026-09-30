import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Email from '../components/email'
import * as about from '../components/about.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>I'm a former product manager turned solopreneur and writer, living in Minnesota with my wife. I build software products at <a href="https://quickhatch.studio/" target="_blank" rel="noreferrer">Quickhatch</a>, write <Link to="/fiction/">fiction</Link>, publish essays in <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer">Turtle's Pace</a>, and build community through the <a href="https://inkyloons.com" target="_blank" rel="noreferrer">Inky Loons</a>. I like making things that last.</p>
      <p>I'm from Michigan, have lived in eight states, and remain a proud Wolverine. By temperament, I'm conscientious and a little neurotic. For instance, I've written in a leatherbound journal for over 2,000 days.</p>
      <p>I wear clothes from Costco, drink black coffee, do my own home improvement, and drive a small truck to haul lumber and kayaks. I bike, ski, ruck, and have climbed 49 of the 50 U.S. <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">state highpoints</a> (procrastinating Denali). Once upon a time, I could ride a unicycle.</p>
      <p>I read classic literature and philosophy (see my <a href="https://www.goodreads.com/user/show/23702091-justin-andersun" target="_blank" rel="noreferrer">Goodreads</a>) and keep a low-info diet. I pray the rosary, donate blood, and love to send physical mail.</p>
      <p>I'm not above or below anything and would love to hear from you. Write to <Email />, or find me on <a href="https://github.com/justinandersun/" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/justinandersun/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>

      <p>Here's what I look like, circa July 2025:</p>

      <div className={about.frame}>
        <StaticImage src="../images/justin.jpg" alt="Justin on a mountain summit, holding up an ice axe" width={450} className={about.photo} />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage