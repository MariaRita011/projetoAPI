import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';

const HeaderDefault = () => {

    return (

        <div className={styles.header2}>

            <div className={styles.header}>
            
                <div className={styles.icon_header2}>

                </div>

                <div className={styles.imagem}>
                    <Image src={'/_CSGO_-_White__Essential_T-Shirt_for_Sale_by_drhollowpoint-removebg-preview.png'} width={100} height={100}/>

                </div>
                
                <div className={styles.links} id={styles.links}>

                    <div className={styles.linka}>
                        <Link className={styles.linksL} href={'/paginahome'}>Home</Link>
                    </div>

                    <div className={styles.linka}>
                           <Link className={styles.linksL} href={'/Armas'}>Cadastro</Link>
                    </div>

                    <div className={styles.linka}>
                           <Link className={styles.linksL} href={'/sobrenos'}>Sobre Nós</Link>
                    </div>

                </div>

            </div>
            
        </div>

    );
}

export default HeaderDefault