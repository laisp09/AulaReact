export default function Exercicio10({ distancia, velocidade})
{
    let tempo = Number(distancia) / Number(velocidade)
    return (
        <div>
        Distância: {distancia} Km<br/>
        Velocidade: {velocidade} Km/h<br/>
        Tempo estimado de viagem: {tempo} Horas
        </div>
     );
}