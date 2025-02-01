import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
    <h2>Projects</h2>
     <p>I make informative web tools:</p>
      <ul>
        <li><a href="https://highpoint.guide/" target="_blank" rel="noreferrer">Highpoint Guide</a>, a comprehensive manual for climbing to the highest point in each of the United States.</li>
        <li><a href="https://productfield.guide/" target="_blank" rel="noreferrer">Product Field Guide</a>, a series of essays on effective product management.</li>
        <li><a href="https://bodyweight.fit/" target="_blank" rel="noreferrer">Bodyweight Fit</a>, a generator of bodyweight workouts.</li>
        <li><a href="https://model.garden/" target="_blank" rel="noreferrer">Model Garden</a>, a collection of mental models.</li>    
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectPage