import React from 'react'
import styles from './style.module.css'
import lipid from '../Assets/Images/lipid.png'
import paytm from '../Assets/Images/paytm.png'
import visa from '../Assets/Images/visa.png'
import mastercard from '../Assets/Images/mastercard.png'
import amex from '../Assets/Images/amex.png'
import club from '../Assets/Images/club.png'
import Card from './Card.jsx'


function Index() {
  return (
    <section className={styles.section}>
      <div className={styles.premiumheading}>    <h1 className={styles.header}>Pick your Premium</h1>
    <p className={styles.subheader}>Listen without limits on your phone, speaker and other devices</p></div>
    <figure className={styles.figure}>
      <img src={lipid} className={styles.img} alt='lipid'/>
      <img src={paytm} className={styles.img} alt='paytm'/>
      <img src={visa} className={styles.img} alt='visa'/>
      <img src={mastercard} className={styles.img} alt='master card'/>
      <img src={amex} className={styles.img} alt='amex'/>
      <img src={club} className={styles.img} alt='club'/>
    </figure>
    <Card/>
    <div className={styles.last}>
        <p className={styles.lastText}>Special discount for eligible students in university</p>
        <button className={styles.lastBtn}>LEARN MORE</button>
      </div>

    </section>
  )
}

export default Index