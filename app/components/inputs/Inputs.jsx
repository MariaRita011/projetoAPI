import styles from './inputs.module.css'

const Inputs=({ type, name, valor, ph, on})=>{
    return(
        <div>
        <input className={styles.inputForm}
        type={type}
        value={valor}
        name={name}
        placeholder={ph}
        onChange={on} required/>

        </div>
    )
}
export default Inputs