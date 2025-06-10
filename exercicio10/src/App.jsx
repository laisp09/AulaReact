import Exercicio10 from "./Exercicio10"

export default function App()
{
  return (
    <div>
      <h1>Chamada para Exercicio 10</h1>
      <Exercicio10 distancia={100} velocidade={80}/> <br/>
      <Exercicio10 distancia={300} velocidade={100}/>
    </div>

  );
}