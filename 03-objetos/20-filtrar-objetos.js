// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco produtos contendo nome e preco.
// Utilize filter() para selecionar apenas os produtos que custam até R$ 100.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

// Criando o array com cinco objetos de produtos
const produtos = [
  { nome: "Mousepad", preco: 45.00 },
  { nome: "Cabo HDMI", preco: 30.00 },
  { nome: "Fone de Ouvido", preco: 250.00 },
  { nome: "Carregador", preco: 90.00 },
  { nome: "Monitor", preco: 1200.00 }
];

const produtosBaratos = produtos.filter((produto) => produto.preco <= 100);

console.log(produtosBaratos);