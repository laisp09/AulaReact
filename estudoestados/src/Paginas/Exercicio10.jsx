import { useState } from "react";

export default function Exercicio10() {

  const[valor, setValor] = useState(0);
  const[quantidade, setQuantidade] = useState(0);
  const[resultado, setResultado] = useState(0);

  function calcular()
  {

   let salario;
   
   salario= (Number(valor)*Number(quantidade) * 30);

   setResultado("Salário: " + salario );
  }

    return(
      <div>
         <h1>Exercício 10 </h1>
         
         <div className="conteudo">

          <h3>Cálculo Salário</h3>

          <form>

            <p>
              Digite o valor da hora: <br/>
              <input type="text" value={valor}
              onChange={(e) => setValor (e.target.value)}/>
            </p>

             <p>
              Digite a quantidade de horas: <br/>
              <input type="text" value={quantidade}
              onChange={(e) => setQuantidade (e.target.value)}/>
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

