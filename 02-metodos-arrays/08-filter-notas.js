// EXERCÍCIO 08 - FILTER - NOTAS
// Considere o array de notas: [4, 7, 8, 5, 9, 6, 10].
// Utilize filter() para criar um novo array somente com notas maiores ou iguais a 7.
//
// Escreva sua solução abaixo:

const notas = [4, 7, 8, 5, 9, 6, 10]
const final = notas.filter((nota) => {return nota >= 7});
console.log(final)