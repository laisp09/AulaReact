export default function Exercicio3({ valor, taxa, tempo})
{
    let valorparcela = valor + ((valor * ((taxa*taxa)/100)) * tempo)
    return (
        <div>
        Valor: R${valor} <br/>
        Taxa: {taxa}% <br/>
        Tempo: {tempo} dias <br/>
        Valor da parcela em atraso é {valorparcela}
        </div>
     );
}