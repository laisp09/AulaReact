import { useState } from "react";

export default function Exercicio4() {

  const[lado, setLado] = useState(0);
  const[resultado, setResultado] = useState(0);

  function calcular()
  {

   let areaquadrado;
   
   areaquadrado= Number(lado)*Number(lado);

   setResultado("Valor da área do Quadrado: " + areaquadrado);
  }

    return (
      <div>
         <h1>Exercício 5 </h1>
         
         <div className="conteudo">

          <h3>Cálculo da área</h3>

          <form>

            <p>
              Digite o valor do lado: <br/>
              <input type="text" value={lado}
               onChange={(e) => setLado (e.target.value)}/>
            </p>

            <p>
              <input type="button" value="Calcular" onClick={calcular}/>
            </p>

            <p>
              <b>Resultado</b>
              <br/>
              Valor do lado do quadrado {lado} <br/>
               {resultado}
            </p>
            <p>
              <a href="/">Voltar</a>
            </p>

          </form>

         </div>
  
      </div>
  
      );
    }