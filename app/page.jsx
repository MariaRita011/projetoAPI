'use client'
import react from 'react'
import { useState } from 'react'
import Login from '../models/login'
import List from '../models/loginList'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

import NavMsg from './components/navmsg/NavMsg'
import Inputs from './components/inputs/Inputs'
const Home = () => {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [tell, setTell] = useState('')
  const [email, setEmail] = useState('')
  const [erro, setErro] = useState(false)
  const [msg, setMsg] = useState(false)
  const [msg2, setMsg2] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [link, setLink] = useState('')
  const lista = new List()
  function adicionar() {
    const hj = new Date(data) 
    const atual = new Date() 
    const ano = hj.getFullYear()
    if (nome.trim() == '' || data.trim() == '' || tell.trim() == ''|| email.trim() == '') {
      setErro(true)
      setTimeout(() => {
        setErro(false)
      }, 3000)
      console.log('n passou pelos inputs vazios')

    }else if(hj > atual){
         setMsg(true)
         setTimeout(() => {
          setMsg(false)
        }, 3000)
    }else if(ano < 1930){
         setMsg2(true)
         setTimeout(() => {
          setMsg2(false)
        }, 3000)
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
      setData('')
      setNome('')
      setTell('')
      setEmail('')
    }
  }


  return (
    <main className={styles.main}>

      <div className={styles.sec}> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <div className={styles.signin}>
          <div className={styles.container}>
            
              <h1 className={styles.title}>Login</h1>
              <div className={styles.form}>
              <div className={styles.inputBox}>
                <Inputs type={'text'} valor={nome} name={'nome'} ph={"Digite seu nome"} on={(e) => setNome(e.target.value)} />
              </div>
              <div className={styles.inputBox}>
                <Inputs type={'date'} valor={data} name={'data'} ph={"Digite sua data de aniverário"} on={(e) => setData(e.target.value)} />
              </div>
              <div className={styles.inputBox}>
                <Inputs type={'number'} valor={tell}  name={'tell'} ph={"Digite seu telefone"} on={(e) => setTell(e.target.value)} />
              </div>
              <div className={styles.inputBox}>
                <Inputs type={'email'} valor={email} name={'email'} ph={"Digite seu email"}   on={(e) => setEmail(e.target.value)}  />
              </div>
             
              <div className={styles.inputBox}>
              <p className={styles.p} >⚠️ Você só poderá acessar o site depois que o login estiver feito!</p>
                  <button onClick={adicionar}  className={styles.link}> Cadastre-se</button>

              </div>
              <div className={styles.inputBox}>
               
                  <Link className={styles.link} href={link}>Verifique nosso site</Link>

              </div>
              <div className={styles.msg}>
              {//mensagem de erro

                erro ? <NavMsg tipo={"erro"} msg={'Preecha todos os campos'} /> : null

              }
              {//mensagem de erro

                msg ? <NavMsg tipo={"erro"} msg={'Você não pode cadastrar seu aniversário depois do dia de hoje!'} /> : null

              }
              {//mensagem de erro

                msg2 ? <NavMsg tipo={"erro"} msg={'Você não pode se cadastrar com essa idade!'} /> : null

              }
              {//mensagem de erro

                sucesso ? <NavMsg tipo={"sucesso"} msg={'Parabéns, login feito com sucesso!'} /> : null

              }
              </div>
            </div>


          </div>

        </div>


      </div>

    </main>
  )
}

export default Home;



