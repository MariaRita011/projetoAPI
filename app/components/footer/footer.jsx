import NavFooter from "../navfooter/page"

import Image from "next/image"

import Link from "next/link"

import styles from "./footer.module.css"

import {VscGithub} from 'react-icons/vsc'

import {SiLinktree} from 'react-icons/si'




export const Footer =()=>{
    return(
    <div className={styles.container}>
<div  className={styles.container2}>
     <NavFooter titulo={'SoftwareWays'} />
   
     </div>
    
        <div className={styles.container2}>
     <h3 className={styles.titulo}>Nossas Páginas</h3>
        <NavFooter exemplo={"Home"}/>
        <NavFooter exemplo={"Cadastro"}/>
     </div>
     <div >
        <div className={styles.icons}>
     <VscGithub />
     <Link href={"https://linktr.ee/giuu509?utm_source=linktree_admin_share"} target="blanc" />
     <SiLinktree />
     <Link href={"https://github.com/Liviadbelao?tab=repositories"} target="blanc">
   </Link>
   </div>
        
     <div className={styles.direitos} >
     <NavFooter texto={'Todos os direitos reservados'} />
     </div>
     </div>
  
    </div>
    )
}