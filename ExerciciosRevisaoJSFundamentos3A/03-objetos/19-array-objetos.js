// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de filmes.
// Cada filme deve possuir titulo, genero e duracao.
// Percorra o array e mostre o título de cada filme.
//
// Escreva sua solução abaixo:
const filmes = [
  {
    titulo: "A Origem",
    genero: "Ficção Científica",
    duracao: 148
  },
  {
    titulo: "O Chefão",
    genero: "Drama",
    duracao: 175
  },
  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    genero: "Fantasia",
    duracao: 178
  }
];
filmes.forEach(filme => {
    console.log(filme.titulo)
});