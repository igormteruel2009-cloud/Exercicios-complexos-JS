// EXERCÍCIO 10 - FINDINDEX - USUÁRIO
// Crie um array com os nomes: Ana, Carlos, Beatriz e Daniel.
// Utilize findIndex() para descobrir a posição de "Beatriz".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

const alunos = ["ana","carlos","beatriz","daniel","vitor"]
const indice = alunos.findIndex((produto) => produto === "beatriz");
console.log(indice)