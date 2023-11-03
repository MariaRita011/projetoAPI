import React from 'react'
import styles from './cardpagehome.module.css'

const CardPageHome = ({ titulo, p }) => {
  return (

    <div className={styles.preto}>
      <h1 className={styles.sub}>{titulo}</h1>
      <p className={styles.text}>{p}</p>
    </div>
  )
}
export default CardPageHome
