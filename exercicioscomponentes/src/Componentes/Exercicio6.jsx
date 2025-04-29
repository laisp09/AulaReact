export default function Exercicio6({ quantidade})
{
    let salariob = (quantidade*150)
    let desconto = (salariob*0.08)
    let salariol = (salariob-desconto)
    return (
        <div>
         Capital: R$
         Taxa: %
         Tempo:
         Juros Simples: R$
         Juros Composto: R$
        </div>
     );
}