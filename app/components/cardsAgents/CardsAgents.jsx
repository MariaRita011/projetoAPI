import styles from './cardsagents.module.css'

const CardsAgents = ({ nm, desc, img }) => {
    return (
        <div className={styles.card}>
            <img className={styles.photos} src={img} alt={nm} width={200} height={200} />
            <div className={styles.lines}>
                <hr className={styles.line} />
            <img src='https://i.pinimg.com/originals/73/94/eb/7394ebcbd70c48b3e0ff930ce3683da4.png' alt={nm} width={20} height={20} />
                <hr className={styles.line} />
            </div>
                <h1 className={styles.title}>{nm}</h1>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}
export default CardsAgents