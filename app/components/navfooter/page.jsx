import styles from '../navfooter/navfooter.module.css'
const NavFooter =({texto, titulo, exemplo}) => {
    return(
        <div>
            <h3 className={styles.titulo}>{titulo}</h3>

            <span className={styles.texto}>{texto}</span>

            <p className={styles.exemplo}>{exemplo}</p>
        </div>
    );
}
export default NavFooter