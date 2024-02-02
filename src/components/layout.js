import * as React from 'react'
import { Link } from 'gatsby'
import * as layout from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={layout.container}>
      <header>
        <h2 className={layout.siteTitle}>Justin AndersUn</h2>
        <nav className={layout.navLinks}>
          <Link to="/" className={layout.navLink}>Home</Link>
          <Link to="/blog/" className={layout.navLink}>Blog</Link>
          <Link to="/now/" className={layout.navLink}>Now</Link>
          <Link to="/about/" className={layout.navLink}>About</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2024 Justin Anderson</p>
      </footer>
    </div>
  )
}

export default Layout