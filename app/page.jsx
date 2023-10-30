import Image from 'next/image'
import styles from './page.module.css'
import HeaderDefault from './components/header/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderDefault/>
     </main>
  )
}
