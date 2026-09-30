import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not found">
      <p>Sorry, there's nothing at this address. It may have moved, or the link may be mistyped.</p>
      <p>Try the <Link to="/">homepage</Link> or browse my <Link to="/blog/">essays</Link>.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Not found" />

export default NotFoundPage
