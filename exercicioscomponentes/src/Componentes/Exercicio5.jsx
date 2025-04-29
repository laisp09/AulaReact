export default function Exercicio5({ quantidade})
{
    let salariob = (quantidade*150)
    let desconto = (salariob*0.08)
    let salariol = (salariob-desconto)
    return (
        <div>
          Quantidade de consultas: {quantidade} <br/>
          Salário Bruto: R${salariob} <br/>
          Desconto INSS: R${desconto} <br/>
          Salário Líquido: R${salariol} 
        </div>
     );
}
