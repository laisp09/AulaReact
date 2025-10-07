import { useState } from "react";

export default function Exercicio4() {

  const[base, setBase] = useState(0);
  const[altura, setAltura] = useState(0);
  const[resultado, setResultado] = useState(0);

  function calcular()
  {

   let areatriangulo;
   
   areatriangulo= (Number(base)*Number(altura)/2);

   setResultado("Valor da área do Triângulo: " + areatriangulo);
  }
  return (
    <div>
      <h1>Exercício 4</h1>

      <div className="conteudo">

        <h3>Cálculo da área</h3>
   
       <form>

        <p>
          Digite o valor da base: <br/>
          <input type="text" value={base}
          onChange={(e) => setBase (e.target.value)}/>
        </p>

        <p>
          Digite o valor da altura: <br/>
          <input type="text" value={altura}
          onChange={(e) => setAltura (e.target.value)}/>
        </p>

        <p>
              <input type="button" value="Calcular" onClick={calcular}/>
            </p>

            <p>
              <b>Resultado</b>
              <br/>
              Valor da base {base} <br/>
              Valor da altura {altura} <br/>
               {resultado}
            </p>


         <p>
            <a href="/"> Voltar  </a>
        </p>
        
       </form>

      </div>
      
    </div>
  );
}
