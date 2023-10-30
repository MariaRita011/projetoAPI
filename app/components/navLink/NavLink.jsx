import Link from "next/link"
import styles from "./navlink.module.css"

export default function navLink({rota, texto}) {
  return (

    <div className={styles.divMain}> 
      <Link className={styles.textLink} href={rota}>{texto}</Link>
    </div>
  )
}