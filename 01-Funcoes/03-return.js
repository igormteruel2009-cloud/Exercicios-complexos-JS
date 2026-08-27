function somar(a , b){
    return a + b;
}
const resultado = somar(15,30)

console.log(resultado);

console.log(somar(7,9))



let ligado = false;


// function ligadesliga()
// {
//         //--------------------
//     if (ligado === false)
//         {
//             ligado = true
//             return "ligado"
//         }
//         //-------------------
//     else
//         {
//             ligado = true
//             return "Desligado"
//         }
//         //-------------------
// }

//--------------------------------------------------------
function ligadesliga()
{
    ligado = !ligado
    return ligado ? "Ligado" : "Desligado"
}
                        //forma diferente de executar o mesmo void

console.log(ligadesliga())
console.log(ligadesliga())
//-------------------------------------------------------