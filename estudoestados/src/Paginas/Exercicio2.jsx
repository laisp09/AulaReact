import { useState } from "react";

export default function Exercicio2() {

  const[numero, setNumero] = useState(0);
  const[resultado, setResultado] = useState(0);

  function calcular()
  {

   let celsius;

   celsius = ((Number(numero) - 32) * 5) / 9;

   setResultado("Graus Celsius: " + celsius);
  }

    return(
      <div>
         <h1>Exercício 2 </h1>
         
         <div className="conteudo">

          <h3>Cálculo da Temperatura</h3>

          <form>

            <p>
              Digite a temperatura em graus fahrenheit: <br/>
              <input type="text" value={numero}
              onChange={(e) => setNumero (e.target.value)}/>
            </p>

            <p>
              <input type="button" value="Calcular" onClick={calcular}/>
            </p>

            <p>
              <b>Resultado</b>
              <br/>
              Fahrenheit é {numero} <br/>
              Resultado em Celsius é {resultado}
            </p>

            <p>
              <a href="/">Voltar</a>
            </p>

          </form>

         </div>
  
      </div>
  
      );
  }