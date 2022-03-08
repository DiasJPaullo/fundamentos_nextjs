import Link from "next/link"
import styles from '../styles/Navegador.module.scss'
export default function Navegador(props){
  return(
    <Link href={props.destino}>
      <div className={styles.navegador} style={{
          backgroundColor: props.cor ?? '#6495ED',
          color: props.corFonte ?? '#fff'
      }}>
        {props.texto}
      </div>
      
    </Link>
  )
}