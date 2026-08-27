// EXERCÍCIO 07 - MAP - REAJUSTE DE PREÇOS
// Considere o array: [50, 100, 150, 200].
// Utilize map() para criar um novo array com aumento de 10% em cada preço.
// Mostre o array original e o novo array.
//
// Escreva sua solução abaixo:

const preco = [50, 100, 150, 200]
const final = preco.map((finais) => {return finais +=(finais * 10) / 100});
console.log(preco)
console.log(final)