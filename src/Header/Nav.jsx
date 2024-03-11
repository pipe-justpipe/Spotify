import React, { useState } from 'react'
import styles from './style.module.css'
import SpotifyLogo from '../Assets/Images/logo.png'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={styles.container}>
      <div className={styles.nav}>
          <img src={SpotifyLogo} className={styles.logo} alt='logo'/>
          <ul className={styles.links}>
              <li><a href="#/premium">Premium</a></li>
              <li><a href="#/support">Support</a></li>
              <li><a href="#/download">Download</a></li>
              <span>|</span>
              <li><a href="#/signup">Sign up</a></li>
              <li><a href="#/login">Login</a></li>
          </ul>
          <span className={styles.menulogo} onClick={() => setIsOpen(!isOpen)}>☰</span>
      </div>
      {
        isOpen && (
          <div className={styles.menu}>
            <ul className={styles.links}>
                <li><a href="#/premium">Premium</a></li>
                <li><a href="#/support">Support</a></li>
                <li><a href="#/download">Download</a></li>
                <li><a href="#/signup">Sign up</a></li>
                <li><a href="#/login">Login</a></li>
            </ul>
          </div>
        )
      }
    </nav>
  )
}

export default Nav