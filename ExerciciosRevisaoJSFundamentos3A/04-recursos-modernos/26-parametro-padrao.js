// EXERCÍCIO 26 - PARÂMETRO PADRÃO
// Crie uma função saudacao que receba nome e periodo.
// O parâmetro periodo deve ter o valor padrão "dia".
// Teste a função informando e omitindo o período.
//
// Escreva sua solução abaixo:

const saudacao = (nome, periodo = "dia") => {
  return `Bom ${periodo}, ${nome}!`;
};
console.log(saudacao("Teruel","tarde"))
console.log(saudacao("Teruel"))