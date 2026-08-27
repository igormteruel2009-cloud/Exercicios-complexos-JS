// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de usuários contendo id, nome e email.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

// Criando o array com três objetos de usuários
const usuarios = [
  {
    id: 1,
    nome: "Ana Souza",
    email: "ana.souza@email.com"
  },
  {
    id: 2,
    nome: "Carlos Eduardo",
    email: "carlos.eduardo@email.com"
  },
  {
    id: 3,
    nome: "Beatriz Lima",
    email: "beatriz.lima@email.com"
  }
];

const json = JSON.stringify(usuarios);
console.log(json)