import { useState } from "react";

export default function Exercicio3() {

  const[valor, setValor] = useState(0);
  const[taxa, setTaxa] = useState(0);
  const[tempo, setTempo] = useState(0);
  const[resultado, setResultado] = useState(0);

  function calcular()
  {

   let valorparcela;
   
   valorparcela= Number(valor) + (Number(valor) * ((Number(taxa)*Number(taxa))/100) * Number(tempo))

   setResultado("Valor da Parcela atualizada: " + valorparcela);
  }

  return (
    <div>
      <h1>Exercício 3</h1>

      <div className="conteudo">

        <h3>Cálculo de Juros</h3>
   
       <form>

        <p>
          Digite o valor da prestação: <br/>
          <input type="text" value={valor}
          onChange={(e) => setValor (e.target.value)}/>
        </p>

        <p>
          Digite a taxa de juros: <br/>
          <input type="text" value={taxa}
          onChange={(e) => setTaxa (e.target.value)}/>
        </p>

        <p>
          Digite o tempo (em dias) de atraso: <br/>
          <input type="text" value={tempo}
          onChange={(e) => setTempo (e.target.value)}/>
        </p>

        <p>
              <input type="button" value="Calcular" onClick={calcular}/>
            </p>

            <p>
              <b>Resultado</b>
              <br/>
              Valor da prestação {valor} <br/>
              Valor da taxa de juros {taxa} <br/>
              Tempo em dias de atraso {tempo} <br/>
              Valor da parcela atualizado {resultado}
            </p>

         <p>
            <a href="/"> Voltar  </a>
        </p>
        
       </form>

      </div>
      
    </div>
  );
}
