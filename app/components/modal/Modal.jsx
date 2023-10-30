
import Buttons from '../buttons/Buttons'
import styles from './modal.module.css'
const Modal = ({ foto, descricao, nome, oc, on, fechar }) => {


  return (
    <div>
     
 
        <div className={styles.modal}>
          <div >
             <button className={styles.botao} onClick={fechar}>X</button>
            <h2 className={styles.titulo}>{nome}</h2>
            <img className={styles.imagem} src={foto} width={200} height={200}/>
            <p className={styles.texto}>{descricao}</p>
            <Buttons bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={oc} text={'Excluir'} />
            <Buttons bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={on} text={'Editar'} />
          </div>
        </div>
       
      </div>)}
      export default Modal