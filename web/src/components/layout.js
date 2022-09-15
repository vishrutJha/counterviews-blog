import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          <a href="/about">
            Authored by <b>Dr. Sumangala Jha (chief editor)</b> and <b>Dr. Vidya Nath Jha</b><br/>
          </a>
          &copy; {new Date().getFullYear()}, Built by <a href='https://vishrutjha.in' target='_blank'>Vishrut Jha</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
