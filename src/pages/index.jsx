import Navegador from "../components/Navegador"
export default function Inicio(){
    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
            
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="DarkMagenta"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
            <Navegador texto="Navegaçao #01" destino="/navegacao" cor="green" />
            <Navegador texto="Navegaçao #02" destino="/cliente/pr/joao" cor="blue" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="#f700f7" />
            <Navegador texto="Integração com API #01" destino="/integracao" cor="	#ffff00" corFonte = "#2e1600"/>
        </div>
    )
}