export default function Jsx(){
    const a = 4
    const b = 3
    const texto = <p>{JSON.stringify({nome: 'João', idade: 30})}</p> 
    function subtitulo(){
        return <h2>{"Muito Legal".toUpperCase()}</h2>
    }
    return(
        <div>
            <h1>JSX é um conceito Central</h1>
            {subtitulo()}
            <p>{"Par de chave para usar javascript".toUpperCase()}</p> 
            {texto}

            {a * b}
        </div>
    )
}