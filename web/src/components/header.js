import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <Link to='/'><img src="https://thecounterviews.com/images/counterviews.png" height="35px"/></Link>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/categories/'><b>Categories</b></Link>
          </li>
          <li>
            <Link to='/issues/'><b>Issues</b></Link>
          </li>          
          <li>
            <Link to='/archive/'><b>Articles</b></Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
