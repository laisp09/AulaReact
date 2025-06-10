export default function Exercicio11({custo})
{
    let custodistribuidor = Number(custo)*0.28
    let impostos = Number (custo)*0.45
    let custofinal = Number(custo) + Number(custodistribuidor) + Number(impostos)
    return (
        <div>
        Valor custo de fábrica: {custo} <br/>
        Valor custo do distribuidor: {custodistribuidor} <br/>
        Valor dos impostos: {impostos} <br/>
        Valor final: {custofinal}
        </div>
     );
}