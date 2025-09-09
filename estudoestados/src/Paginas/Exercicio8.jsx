export default function Exercicio8() {
    return(
      <div>
         <h1>Exercício 8 </h1>
         
         <div className="conteudo">

          <h3>Cálculo IMC</h3>

          <form>

            <p>
              Digite o peso: <br/>
              <input type="text" />
            </p>

             <p>
              Digite a altura: <br/>
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