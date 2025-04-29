export default function Exercicio4({ tipo, base, altura})
{
    
    if (tipo == "triangulo")
    {
       let area = (base*altura)/2;
       return (
         <div>
           Polígono {tipo} de base {base} e altura {altura} possui a área de {area}
         </div>
       );
    }

    else
    if (tipo == "retangulo")
    {
        let area = (base*altura);
        return (
            <div>
              Polígono {tipo} de base {base} e altura {altura} possui a área de {area}
            </div>
        );
    }

    else
    {
        <div>
           O tipo é inválido 
        </div>
    };
}