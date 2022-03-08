import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){

  // const state = useState(0)

  // let numero = state[0]
  // let alterarNumero = state[1]
  // console.log(state)
  // function incrementar(){
  //   alterarNumero(numero + 1)
  // }
  const [numero, setNumero] = useState(0) // React Hooks
  function incrementar(){
    setNumero(numero + 1)
  }
  return(
    <Layout titulo="Componente em Estado">
      <span>{numero}</span><br />
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  )
}