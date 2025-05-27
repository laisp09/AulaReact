export default function Exercicio8({ peso, altura})
{
    let imc = peso/(altura*altura);
    return (
        <div>
        Peso: {peso} <br/>
        Altura: {altura} <br/>
        Seu IMC é: {imc} 
        </div>
     );
}