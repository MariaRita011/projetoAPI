import styles from './buttonsact.module.css'

const ButtonsAct = ({ func, text, bkcor, cor, bdcor}) => {

    const ButtonsActstyle = {
        backgroundColor: bkcor,
        color: cor,
        border: `1px solid ${bdcor}` };

    return (
           <button onClick={func} style={ButtonsActstyle} className={styles.button} >{text}</button>
    )
}
export default ButtonsAct