import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not found">
      <h2>You've wandered off the map.</h2>
      <p>Head back <Link to="/">home</Link> or follow the cairns to my <Link to="/blog/">essays</Link>.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Not found" />

export default NotFoundPage
