function multiplicar(a , b)
{
    return a * b;
}
// funçao tradicional

const multiplicarAnonima = function(a,b)
{
    return a * b;
}
//funcao Anonima

const multiplicarArrow = (a,b) => 
    {
        return a * b;
    }
    //Funçao iron function(funcao em seta)

console.log(multiplicar(5,7));
console.log(multiplicarAnonima(5,7))
console.log(multiplicarArrow(5,7))