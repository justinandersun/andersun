import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const FictionPage = () => {
  return (
    <Layout pageTitle="Fiction">
      <h2>Fiction</h2>
      <p>I label my work as <i>magical realism</i>, which is a somewhat ambiguous term. In short, my stories occur in base reality but mystical elements blur the edges.</p>

      <h3>Short Stories</h3>
      <p><a href="https://poetschoice.in/product/lost-in-lust/" target="_blank" rel="noreferrer">Jackaloped</a>, <i>Free Spirit</i>, 2025</p>
      <p><a href="https://www.grimandgilded.com/justin-anderson" target="_blank" rel="noreferrer">Chimera & Company</a>, <i>Grim & Gilded</i>, 2024</p>
      <p><a href="https://www.quillkeeperspress.com/the-aerial-perspective-literary-journal/1-2-2nd-quarter-2023" target="_blank" rel="noreferrer">The Lemon-Lime Lady</a>, <i>Quillkeepers Press</i>, 2023</p>
      <p><a href="https://issuu.com/bluemesareview/docs/blue_mesa_review_issue_45?e=27483296/92099934" target="_blank" rel="noreferrer">The Time Donor</a>, <i>Blue Mesa Review</i>, 2022</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Fiction" />

export default FictionPage