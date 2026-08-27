// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto pedido com numero, cliente e valorTotal.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

const pedido = {
    cliente: "Vinicius",
    valortotal: 99,
    numero: 12
};
const json = JSON.stringify(pedido);

console.log(json);