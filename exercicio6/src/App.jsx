import Exercicio6 from "./Exercicio6"
import Exercicio7 from "./Exercicio7"

export default function App()
{
  return (
    <div>
      <h1>Exercicio 6</h1>
      <Exercicio6 quantidade={2} preco={5}/>
  
    
    <h3>Chamada para o Exercicio 7</h3>
    <Exercicio7 n1={8} n2={7} n3={10} />
    </div>

  );
}

