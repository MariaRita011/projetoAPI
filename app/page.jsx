'use client'
import react from 'react'
import { useState } from 'react'
import Login from '../models/login'
import List from '../models/loginList'
import Image from 'next/image'
import styles from './page.module.css'
import HeaderDefault from './components/header/Header'

const Home = () => {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [tell, setTell] = useState('')
  const lista = new List()
  function adicionar(){
     
  }
  return (
    <main className={styles.main}>
      <HeaderDefault/>
      <input
        type={'text'}
        value={nome}
        name={'nome'}
        placeholder={"Digite seu nome"}
        onChange={(e) => setNome(e.target.value)} />
      <input
        type={'date'}
        value={data}
        name={'data'}
        placeholder={"Digite sua data de aniverário"}
        onChange={(e) => setData(e.target.value)} />
      <input
        type={'number'}
        value={tell}
        name={'tell'}
        placeholder={"Digite seu telefone"}
      
        onChange={(e) => setTell(e.target.value)} />
     </main>
  )
}

export default Home;



