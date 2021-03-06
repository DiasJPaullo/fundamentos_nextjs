import Link from "next/link"
import styles from "../styles/layout.module.scss"
export default function Layout(props){
    return(
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
                
                
        </div>
    )
}