import React from 'react'
import styles from './page.module.css'

const CardPageHome = ({titulo, p, p1, p2, p3}) => {
  return (
      
    <div className={styles.preto}>
    <h2 className={styles.sub}>{titulo}</h2>
   
    <div className={styles.texto}>
        <h2 className={styles.vasco}>{p}</h2>

            <h2 className={styles.vasco1}>{p1}</h2>
            <h2 className={styles.vasco2}>{p2}</h2>
            <h2 className={styles.vasco3}>{p3}</h2>
    </div>

</div>
  )
}
export default  CardPageHome
