import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>I'm a product manager who specializes in data science because I like solving complex problems for people.</p>
      
      <p>I write short stories and recently published "<a href="https://issuu.com/bluemesareview/docs/blue_mesa_review_issue_45?e=27483296/92099934" target="_blank" rel="noreferrer">The Time Donor</a>" and "<a href="https://www.quillkeeperspress.com/the-aerial-perspective-literary-journal/1-2-2nd-quarter-2023" target="_blank" rel="noreferrer">Lemon-Lime Lady</a>."</p>
      
      <p>I make websites, like <a href="https://highpoint.guide/" target="_blank" rel="noreferrer">Highpoint Guide</a>, <a href="https://model.garden/" target="_blank" rel="noreferrer">Model Garden</a>, <a href="https://bodyweight.fit/" target="_blank" rel="noreferrer">Bodyweight Fit</a>, and <a href="https://pmfieldmanual.com/" target="_blank" rel="noreferrer">PM Field Manual</a>.</p>
      
      <p>I am a partner, brother, son, cousin, grandson, friend, and nephew.</p>
      
      <p>I enjoy outdoor adventures, especially in the mountains, and have a goal to summit the highest point in all 50 United States.</p>
      
      <p>I originate from West Michigan and still bear the markings of a Midwesterner: polite, nasally, and have an irrepressible need to discuss the weather.</p>
      
      <p>I'm 5'9" with a medium build and have no tattoos, piercings, or interesting hair, so I'm generic-looking and probably remind you of someone else.</p>
      
      <p>Among the Big Five personality traits, I am</p>
      <ul>
        <li>Slightly more introverted than extroverted</li>
        <li>Highly conscientious and obsessively organized</li>
        <li>Highly agreeable and compassionate</li>
        <li>Highly neurotic and moody</li>
        <li>Moderately open to new experiences</li>
      </ul>
      
      <p>Some other things about me</p>
      <ul>
        <li>I love long, meandering walks and conversations</li>
        <li>I like winter; the snow, cold, and dark nights</li>
        <li>I'm frugal and wear shoes even after they get holes in them</li>
        <li>I laugh easily and uncontrollably at mundane things</li>
        <li>I donate blood each quarter</li>
        <li>I'm a night owl but wish I was a morning bird</li>
        <li>I prefer board games to video games</li>
        <li>I film one-second daily videos that I <a href="https://www.youtube.com/user/justinandersun" target="_blank" rel="noreferrer">share each year</a></li>
        <li>I can unicycle and juggle, but I'm more skilled at the former</li>
      </ul>
      <p>Find me on <a href="https://twitter.com/justinandersun" target="_blank" rel="noreferrer">Twitter</a>, <a href="https://github.com/justinandersun/" target="_blank" rel="noreferrer">GitHub</a>, and <a href="https://www.linkedin.com/in/justinandersun/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage