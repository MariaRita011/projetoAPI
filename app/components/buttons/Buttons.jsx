import styles from './buttons.module.css'

const Buttons = ({ func, text, bkcor, cor, bdcor}) => {

    const buttonStyle = {
        backgroundColor: bkcor,
        color: cor,
        border: `1px solid ${bdcor}` };

    return (
           <button onClick={func} style={buttonStyle} className={styles.button} >{text}</button>
    )
}
export default Buttons