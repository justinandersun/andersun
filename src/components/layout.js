import * as React from 'react'
import { Link } from 'gatsby'
import * as layout from './layout.module.css'
import Email from './email'

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
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Justin Andersun</p>
        <nav className={layout.footerLinks}>
          <Email label="Email" className={layout.footerLink} />
          <a href="/rss.xml" className={layout.footerLink}>RSS</a>
          <a href="https://turtlespace.blog/" target="_blank" rel="noreferrer" className={layout.footerLink}>
            Turtle's Pace
            <svg className={layout.externalIcon} viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1.5h5.5V7M8.5 1.5 1.5 8.5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Layout