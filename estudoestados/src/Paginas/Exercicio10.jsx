export default function Exercicio10() {
    return(
      <div>
         <h1>Exercício 10 </h1>
         
         <div className="conteudo">

          <h3>Cálculo Salário</h3>

          <form>

            <p>
              Digite o valor da hora: <br/>
              <input type="text" />
            </p>

             <p>
              Digite a quantidade de horas: <br/>
              <input type="text" />
            </p>

            <p>
              <input type="button" value="Calcular" />
            </p>

            <p>
              <a href="/">Voltar</a>
            </p>

          </form>

         </div>
  
      </div>
  
      );
  }