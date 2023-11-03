import Image from 'next/image';
import styles from './header.module.css';
import NavLink from '../navlink/NavLink.jsx'


const HeaderDefault = () => {

    return (
        <div>
            <div className={styles.menu2}>

                <div className={styles.icon_header}>
                    {/* <AiOutlineMenu /> */}
                </div>

                <div className={styles.imageLogo}>
                    <Image className={styles.logo} src={'/logo2.png'} width={45} height={45} />
                </div>

            </div>

            <div className={styles.header}>
            <div className={styles.imageLogo1}>
                    <Image className={styles.logo1} src={'/logo2.png'} width={45} height={45} />
                </div>
                {/* <div className={styles.icon_header}>
                    <AiOutlineMenu />
                </div> */}
                <div className={styles.icon_header2}>
                    {/* <AiOutlineClose /> */}
                </div>
                <div className={styles.links} id={styles.links}>


                    <div className={styles.linka}>
                        <NavLink rota={'/'} texto={'Home'} />
                    </div>

                    <div className={styles.linka}>

                        <NavLink rota={'/Armas'} texto={'Cadastro'} />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default HeaderDefault