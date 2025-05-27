export default function Exercicio9({ capital, juros, tempo})
{
    let montante = capital * Math.pow(1 + juros / 100, tempo);
    return (
        <div>
        Capital: R${capital} <br/>
        Juros: R${juros} <br/>
        Tempo: {tempo} <br/>
        Sua Montante é: R${montante} 
        </div>
     );
}