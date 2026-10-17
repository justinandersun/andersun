import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as grid from '../components/projects.module.css'

const projects = [
  { name: 'Stu', years: '2026–present', image: <StaticImage src="../images/projects/stu.jpg" alt="Screenshot of Stu" width={600} className={grid.thumb} />, url: 'https://stu.tools/', blurb: 'The user manual for your home. Currently available for iPhone to help homeowners care for their houses.' },
  { name: 'Highpoint Guide', years: '2022–present', image: <StaticImage src="../images/projects/highpoint-guide.jpg" alt="Screenshot of Highpoint Guide" width={600} className={grid.thumb} />, url: 'https://highpoint.guide/', blurb: 'Guides for climbing the fifty U.S. highpoints, from my experience summitting 49 of them.' },
  { name: 'Inky Loons', years: '2025–present', image: <StaticImage src="../images/projects/inky-loons.jpg" alt="Screenshot of Inky Loons" width={600} className={grid.thumb} />, url: 'https://inkyloons.com', blurb: 'A Minneapolis-based writing community.' },
  { name: 'Treasure Chess', years: '2026', image: <StaticImage src="../images/projects/treasure-chess.jpg" alt="Screenshot of Treasure Chess" width={600} className={grid.thumb} />, url: 'https://treasure-chess-eight.vercel.app/', blurb: 'A chess game of asymmetric armies.' },
  { name: 'The All-Rounder', years: '2026', image: <StaticImage src="../images/projects/all-rounder.jpg" alt="Screenshot of The All-Rounder" width={600} className={grid.thumb} />, url: 'https://all-rounder-five.vercel.app/', blurb: 'A general physical fitness challenge.' },
  { name: 'Should I Automate This?', years: '2026', image: <StaticImage src="../images/projects/automate-this.jpg" alt="Screenshot of Should I Automate This?" width={600} className={grid.thumb} />, url: 'https://automate-this.vercel.app/', blurb: 'Weigh the time a task takes against the time it would take to automate.' },
  { name: 'Product Field Guide', years: '2024', image: <StaticImage src="../images/projects/product-field-guide.jpg" alt="Screenshot of Product Field Guide" width={600} className={grid.thumb} />, url: 'https://productfield.guide/', blurb: 'Essays on product management.' },
  { name: 'Model Garden', years: '2023', image: <StaticImage src="../images/projects/model-garden.jpg" alt="Screenshot of Model Garden" width={600} className={grid.thumb} />, url: 'https://model.garden/', blurb: 'A collection of my favorite mental models.' },
  { name: 'Bodyweight Fit', years: '2022', image: <StaticImage src="../images/projects/bodyweight-fit.jpg" alt="Screenshot of Bodyweight Fit" width={600} className={grid.thumb} />, url: 'https://bodyweight.fit/', blurb: 'A bodyweight workout generator.' },
]

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>Things that I've built or am actively building:</p>
      <div className={grid.grid}>
        {projects.map((project) => (
          <a href={project.url} target="_blank" rel="noreferrer" className={grid.card} key={project.name}>
            <div className={grid.head}>
              <span className={grid.name}>{project.name}</span>
              <span className={grid.years}>{project.years}</span>
            </div>
            {project.image}
            <p className={grid.blurb}>{project.blurb}</p>
          </a>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectPage
