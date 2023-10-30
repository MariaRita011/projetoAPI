import styles from './navmsg.module.css'

const NavMsg = ({ msg, tipo }) => {
    return (
        <div className={styles.mensagem} id={styles[tipo]} >
            <p >{msg}</p>
        </div>


    )
}

export default NavMsg