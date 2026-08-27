// EXERCÍCIO 09 - FIND - PRODUTO
// Crie um array de objetos com nome e preço de quatro produtos.
// Utilize find() para localizar o produto chamado "Teclado".
// Mostre o produto encontrado.
//
// Escreva sua solução abaixo:

const preco = [
  { nome: "Teclado", preco: 4500.00 },
  { nome: "Demy", preco: 2499.90 },
  { nome: "Bisnaga", preco: 299.00 },
  { nome: "A porra do teuel", preco: 450.50 }
];
const indice = preco.find((produto) => produto.nome === "Teclado");
console.log(indice)