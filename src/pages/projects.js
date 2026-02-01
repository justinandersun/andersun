import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
    <h2>Projects</h2>
     <p>I make <i>informative web tools</i>. By this, I mean clean, ad-free websites that serve niche audiences.</p>

     <p>Here are a few:</p>
      <ul>
        <li><a href="https://highpoint.guide/" target="_blank" rel="noreferrer">Highpoint Guide</a>, a comprehensive manual for climbing to the highest point in each of the United States.</li>
        <li><a href="https://productfield.guide/" target="_blank" rel="noreferrer">Product Field Guide</a>, essays on product management.</li>
        <li><a href="https://bodyweight.fit/" target="_blank" rel="noreferrer">Bodyweight Fit</a>, a generator of bodyweight workout routines.</li>
        <li><a href="https://model.garden/" target="_blank" rel="noreferrer">Model Garden</a>, a collection of mental models.</li>    
        <li><a href="https://inkyloons.com" target="_blank" rel="noreferrer">Inky Loons</a>, a Minneapolis-based writing group.</li> 
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectPage