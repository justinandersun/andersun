import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as page from '../components/page.module.css'

const stories = [
  { title: 'Jackaloped', url: 'https://poetschoice.in/product/lost-in-lust/', publication: 'Free Spirit', year: 2025 },
  { title: 'Chimera & Company', url: 'https://www.grimandgilded.com/justin-anderson', publication: 'Grim & Gilded', year: 2024 },
  { title: 'The Lemon-Lime Lady', url: 'https://www.quillkeeperspress.com/the-aerial-perspective-literary-journal/1-2-2nd-quarter-2023', publication: 'Quillkeepers Press', year: 2023 },
  { title: 'The Time Donor', url: 'https://issuu.com/bluemesareview/docs/blue_mesa_review_issue_45?e=27483296/92099934', publication: 'Blue Mesa Review', year: 2022 },
]

const FictionPage = () => {
  return (
    <Layout pageTitle="Fiction">
      <p>I write "speculative fiction." This means that my stories occur in base reality but magical elements blur the edges.</p>

      <h3 className={page.heading}>Novels</h3>
      <ul className={page.index}>
        <li className={page.row}>
          <div>
            Frozen Furnace
            <span className={page.subtitle}>Second draft in progress</span>
          </div>
        </li>
      </ul>

      <h3 className={page.heading}>Short Stories</h3>
      <ul className={page.index}>
        {stories.map((story) => (
          <li className={page.row} key={story.title}>
            <div>
              <a href={story.url} target="_blank" rel="noreferrer">{story.title}</a>
              <span className={page.subtitle}>{story.publication}</span>
            </div>
            <span className={page.rowDate}>{story.year}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Fiction" />

export default FictionPage
