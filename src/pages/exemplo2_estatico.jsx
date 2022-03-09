import { useState, useEffect } from "react";
export const getStaticProps = async() => {
    const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json()
    return {
        revalidate: 10, // A cada 10 segundo a pagina será gerado novamente
        props: {
            valor: dados.valor
        }
    }
}
const Estatico = (props) => {
//   const [valor, setValor] = useState(0);

//   useEffect(() => {
//     async function obterValor() {
//       const resp = await fetch("/api/random");
//       const data = await resp.json();
//       setValor(data.valor);
//     }
//     obterValor();
//   }, []);

  // async function obterValor() {
  //     const resp= await fetch('/api/random')
  //     const data = await resp.json()
  //     setValor(data.valor)
  // }
  // useEffect(obterValor, [])

  return (
    <div>
      <h1>Conteudo Estático</h1>
      <h2>Último Valor = {props.valor}</h2>
    </div>
  );
};
export default Estatico;
