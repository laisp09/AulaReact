export default function Exercicio9() {
  return (
    <div>
      <h1>Exercício 9</h1>

      <div className="conteudo">

        <h3>Cálculo Montante </h3>
   
       <form>

        <p>
          Digite o principal: <br/>
          <input type="text"/>
        </p>

        <p>
          Digite a taxa de juros: <br/>
          <input type="text"/>
        </p>

        <p>
          Digite o tempo: <br/>
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
