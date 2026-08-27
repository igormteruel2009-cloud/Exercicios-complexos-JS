// EXERCÍCIO 24 - SPREAD EM OBJETO
// Crie um objeto usuario com nome e email.
// Utilize Spread para criar um novo objeto que mantenha os dados
// e acrescente a propriedade ativo com valor true.
//
// Escreva sua solução abaixo:

const usuario = {
  nome: "Maria Silva",
  email: "maria.silva@email.com"
};
const atualizado = {...usuario, ativo: true};
console.log(atualizado);