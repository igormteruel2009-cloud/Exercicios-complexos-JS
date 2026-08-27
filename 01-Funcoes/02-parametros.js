function apresentar(nome)
{
    console.log("ola," + nome);
}

apresentar("Teruel");

function sistema(nome = "visitante")
{
    console.log("Ola," + nome)
}
sistema();
sistema("Teruel")
function somar(numero1 , numero2)
{
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
}
somar("iago","bldep");