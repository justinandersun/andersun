import * as React from 'react'
import { Link } from 'gatsby'
import * as layout from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={layout.bigContainer}>
      <header>
        <h2 className={layout.siteTitle}>Justin Andersun</h2>
        <nav className={layout.navLinks}>
          <Link to="/" className={layout.navLink}>Home</Link>●
          <Link to="/blog/" className={layout.navLink}>Blog</Link>●
          <Link to="/fiction/" className={layout.navLink}>Fiction</Link>●
          <Link to="/projects/" className={layout.navLink}>Projects</Link>●
          <Link to="/about/" className={layout.navLink}>About</Link>●
          <Link to="/now/" className={layout.navLink}>Now</Link>
        </nav>
      </header>
      <div className={layout.container}>
        <main>
          {children}
        </main>
      </div>
      <footer>
        <p>&copy; 2026 Justin Andersun</p>
      </footer>
    </div>
  )
}

export default Layout