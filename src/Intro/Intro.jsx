import React from 'react'
import styles from './style.module.css'

function Index() {
  return (
    <div className={styles.intro}>
        <h1 className={styles.heading}>Get Premium free for 1 month</h1>
        <p className={styles.amount}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
        <div className={styles.btns}>
          <button className={styles.button1}>GET STARTED</button>
          <button className={styles.button2}>SEE OTHER PLANS</button>
        </div>
        <p className={styles.terms}>Terms and conditions apply. 1 month free not available for users who have already tried Premium.</p>
    </div>
  )
}

export default Index