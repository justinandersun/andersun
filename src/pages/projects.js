import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
    <h2>Projects</h2>
     <p>I make <i>informative web tools</i>. By this, I mean clean, ad-free websites that serve niche audiences.</p>

      <p><a href="https://highpoint.guide/" target="_blank" rel="noreferrer">Highpoint Guide</a><br /><i>A manual for climbing the U.S. highpoints</i></p>
      <p><a href="https://productfield.guide/" target="_blank" rel="noreferrer">Product Field Guide</a><br /><i>Essays on product management</i></p>
      <p><a href="https://bodyweight.fit/" target="_blank" rel="noreferrer">Bodyweight Fit</a><br /><i>A generator of bodyweight workout routines</i></p>
      <p><a href="https://model.garden/" target="_blank" rel="noreferrer">Model Garden</a><br /><i>A collection of mental models</i></p>
      <p><a href="https://inkyloons.com" target="_blank" rel="noreferrer">Inky Loons</a><br /><i>A Minneapolis-based writing group</i></p>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectPage