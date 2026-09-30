import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as grid from '../components/projects.module.css'
import * as page from '../components/page.module.css'

const projects = [
  { name: 'Stu', years: '2026–present', image: <StaticImage src="../images/projects/stu.jpg" alt="Screenshot of Stu" width={600} className={grid.thumb} />, url: 'https://stu.tools/', blurb: 'A stewardship system for your home. Track maintenance, belongings, and the small chores that keep a house running.' },
  { name: 'Highpoint Guide', years: '2022–present', image: <StaticImage src="../images/projects/highpoint-guide.jpg" alt="Screenshot of Highpoint Guide" width={600} className={grid.thumb} />, url: 'https://highpoint.guide/', blurb: 'A manual for climbing the U.S. highpoints, with route notes and planning tips for all fifty summits.' },
  { name: 'Inky Loons', years: '2025–present', image: <StaticImage src="../images/projects/inky-loons.jpg" alt="Screenshot of Inky Loons" width={600} className={grid.thumb} />, url: 'https://inkyloons.com', blurb: 'A Minneapolis-based writing community.' },
  { name: 'The All-Rounder', years: '2026', image: <StaticImage src="../images/projects/all-rounder.jpg" alt="Screenshot of The All-Rounder" width={600} className={grid.thumb} />, url: 'https://all-rounder-five.vercel.app/', blurb: 'A general physical fitness test with benchmarks scaled to you.' },
  { name: 'Should I Automate This?', years: '2026', image: <StaticImage src="../images/projects/automate-this.jpg" alt="Screenshot of Should I Automate This?" width={600} className={grid.thumb} />, url: 'https://automate-this.vercel.app/', blurb: 'A simple calculator that weighs the time a task takes against the time it would take to automate.' },
  { name: 'Product Field Guide', years: '2024', image: <StaticImage src="../images/projects/product-field-guide.jpg" alt="Screenshot of Product Field Guide" width={600} className={grid.thumb} />, url: 'https://productfield.guide/', blurb: 'Essays on product management: practical ideas for building things people actually want.' },
  { name: 'Model Garden', years: '2023', image: <StaticImage src="../images/projects/model-garden.jpg" alt="Screenshot of Model Garden" width={600} className={grid.thumb} />, url: 'https://model.garden/', blurb: 'A collection of mental models for thinking more clearly about work, life, and decisions.' },
  { name: 'Bodyweight Fit', years: '2022', image: <StaticImage src="../images/projects/bodyweight-fit.jpg" alt="Screenshot of Bodyweight Fit" width={600} className={grid.thumb} />, url: 'https://bodyweight.fit/', blurb: 'A generator of bodyweight workout routines. No gym, no equipment, just a plan for today.' },
]

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>Things that I've built or am actively building:</p>
      <div className={grid.grid}>
        {projects.map((project) => (
          <a href={project.url} target="_blank" rel="noreferrer" className={grid.card} key={project.name}>
            {project.image}
            <p className={grid.name}>{project.name}</p>
            <p className={grid.blurb}>{project.blurb}</p>
            <span className={`${page.pill} ${grid.years}`}>{project.years}</span>
          </a>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectPage
