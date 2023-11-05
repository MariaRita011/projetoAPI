import NavFooter from "../navfooter/NavFooter"
import { SiLinktree } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link"
import styles from "./footer.module.css"

export const Footer = () => {

   return (
      <div className={styles.container}>

         <div className={styles.container2}>
            <h1 className={styles.titulo}>Software Ways</h1>
            <p className={styles.direitos}>Todos os direitos reservados @2023.</p>
         </div>

         <div className={styles.container2}>
            <h3 className={styles.titulo}>Nossas Páginas</h3>
            <NavFooter rota={'./'} texto={'Home'} />
            <NavFooter rota={'./Armas'} texto={'Cadastro'} />
            <NavFooter rota={'./sobrenos'} texto={'Sobre nós'} />
         </div>

         <div >

            <div className={styles.icons}>

               <Link href={"https://linktr.ee/giuu509?utm_source=linktree_admin_share"} target="blanck"><SiLinktree className={styles.icon} /></Link>

               <Link href={"https://github.com/Liviadbelao?tab=repositories"} target="blanck"><AiFillGithub className={styles.icon} /></Link>
            </div>

         </div>

      </div>
   )
}