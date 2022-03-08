import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export default function ClientePorCodigo(){
  const router = useRouter()
  return(
    <Layout titulo="Navegação Dinameica">
      <span>Código = {router.query.codigo} </span><br />
      <span>Filial = {(router.query.filial).toUpperCase()} </span><br />

    </Layout>
  )
}