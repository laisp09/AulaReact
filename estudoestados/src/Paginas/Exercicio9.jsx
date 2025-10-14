import { useState } from "react";

export default function Exercicio9() {

  const[principal, setPrincipal] = useState(0);
  const[juros, setJuros] = useState(0);
  const[tempo, setTempo] = useState(0);
  const[resultado, setResultado] = useState(0);

  function calcular()
  {

   let montante;
   
   montante= Number(principal)*(1 + Number(juros)*Number(tempo));

   setResultado("Montante: " + montante );
  }

  return (
    <div>
      <h1>Exercício 9</h1>

      <div className="conteudo">

        <h3>Cálculo Montante </h3>
   
       <form>

        <p>
          Digite o principal: <br/>
          <input type="text" value={principal}
          onChange={(e) => setPrincipal (e.target.value)}/>
        </p>

        <p>
          Digite a taxa de juros: <br/>
          <input type="text" value={juros}
          onChange={(e) => setJuros (e.target.value)}/>
        </p>

        <p>
          Digite o tempo: <br/>
          <input type="text" value={tempo}
          onChange={(e) => setTempo (e.target.value)}/>
        </p>

        <p>
              <input type="button" value="Calcular" onClick={calcular}/>
            </p>

            <p>
              <b>Resultado</b>
              <br/>
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

