function somar(...numero){
    return numero.reduce((total,numero) => total + numero, 0);
}

console.log(somar(10,20,30,40,50));
// FUNCAO REDUCE FAZ ISSO
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100
// 100 + 50 = 150