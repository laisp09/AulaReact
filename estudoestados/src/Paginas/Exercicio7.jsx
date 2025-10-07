import { useState } from "react";

export default function Exercicio7() {

  const[nota1, setNota1] = useState(0);
  const[nota2, setNota2] = useState(0);
  const[nota3, setNota3] = useState(0);
  const[resultado, setResultado] = useState(0);

  function calcular()
  {

   let media;
   
   media= Number((media)+Number(media)+Number(media))/3;

   setResultado("Subtotal: " + subtotal + " - Desconto: " + desconto + " - Valor Final " + valorfinal );
  }

  return (
    <div>
      <h1>Exercício 7</h1>

      <div className="conteudo">

        <h3>Cálculo Média </h3>
   
       <form>

        <p>
          Digite a nota 1: <br/>
          <input type="text"/>
        </p>

        <p>
          Digite a nota 2: <br/>
          <input type="text"/>
        </p>

        <p>
          Digite a nota 3: <br/>
          <input type="text"/>
        </p>

        <p>
          <input type="button" value="Calcular"/>
        </p>

         <p>
            <a href="/"> Voltar  </a>
        </p>
        
       </form>

      </div>
      
    </div>
  );
}
