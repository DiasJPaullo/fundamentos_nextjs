import styles from "../styles/estiloso.module.scss"
import Layout from "../components/Layout"
export default function Estiloso(){
    return(
        <Layout titulo="João Paullo">
            {/* props.children no layout */}
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}