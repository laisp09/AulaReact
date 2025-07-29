import "./App.css";

export default function App()
{
    const estilo = {
        color:"#fb6197ff" ,
        textAlign: "center",
        backgroundColor: " #fa95b8"
     };

    return (
        <div classNme="conteudo">
            <h1>Estudo CSS</h1>

            <p>
               O CSS (<i>Cascading Style Sheets</i>) é uma liguagem utilizada para estilizar as <b>páginas web</b>. Com ela podemos definir:
            </p>

            <ul>
                <li>Cores de fundo, do texto e dos elementos.</li>
                <li>Fontes e tamanho das letras.</li>
                <li>Posicionamento de elementos.</li>
                <li>Espaçamento, bordas, sombras, etc.</li>
                <li>Efeitos visuais e animações.</li>
            </ul>

            <h3 style={estilo}>Cidade de Mococa</h3>

            <p className="centro">
                <img src="mococa.jpg" />
            </p>
            
        </div>
    );
}