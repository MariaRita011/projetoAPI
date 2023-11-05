'use client'
import react from 'react'
import { useState } from 'react'
import Login from '../models/login'
import List from '../models/loginList'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import HeaderDefault from './components/header/Header'
import NavMsg from './components/navmsg/NavMsg'
import Inputs from './components/inputs/Inputs'
const Home = () => {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [tell, setTell] = useState('')
  const [erro, setErro] = useState(false)
  const [msg, setMsg] = useState(false)
  const [sucesso, setSucesso] = useState(false)
const [link, setLink] = useState('')
  const lista = new List()
  function adicionar() {
    if (nome.trim() == '' || data.trim() == '' || tell.trim() == '' ) {
      setErro(true)
      setTimeout(() => {
        setErro(false)
      }, 3000)
      console.log('n passou pelos inputs vazios')
 
    } else {
      console.log('adicionou');
      setSucesso(true)
      setTimeout(() => {
        setSucesso(false)
    }, 3000)
      const usuario = new Login(nome, data, tell)
      lista.add(usuario)
      console.log(lista)
      setLink('/paginahome')
    }
  }
 

  return (
    <main className={styles.main}>

      <h1  className={styles.title}>Faça seu login antes de entrar no site!</h1>
      <div className={styles.containerLogin}>

      <Inputs type={'text'} valor={nome} name={'nome'} ph={"Digite seu nome"} on={(e) => setNome(e.target.value)}/>
      <Inputs type={'date'} valor={data} name={'data'} ph={"Digite sua data de aniverário"} on={(e) => setData(e.target.value)}/>
      <Inputs type={'number'} valor={tell} name={'tell'} ph={"Digite seu telefone"} on={(e) => setTell(e.target.value)}/>

     <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={adicionar}>
      Cadastre-se
      </button>


      <button className={styles.button} >
        <Link  className={styles.link} href={link}>Visite nosso site</Link>
      </button>
      </div>

      </div>

      {//mensagem de erro

        erro ? <NavMsg tipo={"erro"} msg={'Preecha todos os campos'} /> : null

      }
      {//mensagem de erro

        msg ? <NavMsg tipo={"erro"} msg={'Você não pode visitar o site sem ter feito o cadastro antes'} /> : null

      }
      {//mensagem de erro

        sucesso ? <NavMsg tipo={"sucesso"} msg={'Parabéns, login feito com sucesso!'} /> : null

      }
    </main>
  )
}

export default Home;



