import * as React from 'react'
import { Link } from 'gatsby'
import * as layout from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={layout.bigContainer}>
      <header>
        <Link to="/" className={layout.siteTitle}>Justin Andersun</Link>
        <nav className={layout.navLinks}>
          <Link to="/blog/" className={layout.navLink} activeClassName={layout.active}>Blog</Link>
          <Link to="/projects/" className={layout.navLink} activeClassName={layout.active}>Projects</Link>
          <Link to="/fiction/" className={layout.navLink} activeClassName={layout.active}>Fiction</Link>
          <Link to="/about/" className={layout.navLink} activeClassName={layout.active}>About</Link>
          <Link to="/now/" className={layout.navLink} activeClassName={layout.active}>Now</Link>
        </nav>
      </header>
      <div className={layout.container}>
        <main>
          {children}
        </main>
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Justin Andersun</p>
      </footer>
    </div>
  )
}

export default Layout