import styles from "../styles/estiloso.module.scss"
import Layout from "../components/Layout"
import Link from "next/link"
export default function Estiloso(){
    return(
        <Layout titulo="João Paullo">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}