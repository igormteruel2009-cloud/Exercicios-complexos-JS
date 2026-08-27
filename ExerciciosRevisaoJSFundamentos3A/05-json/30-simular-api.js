// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades sucesso, mensagem e dados.
// A propriedade dados deve conter um array com dois produtos.
// Converta a resposta para JSON e depois converta novamente para objeto.
// Mostre a mensagem e os produtos recebidos.
//
// Escreva sua solução abaixo:


const resposta = {
  sucesso: true,
  mensagem: "Produtos carregados com sucesso!",
  dados: [
    { id: 1, nome: "Teclado Mecânico", preco: 250.00 },
    { id: 2, nome: "Mouse Gamer", preco: 150.00 }
  ]
};


const jsonString = JSON.stringify(resposta);
console.log("--- JSON em formato de Texto ---");
console.log(jsonString);


const respostaObjeto = JSON.parse(jsonString);


console.log("\n--- Dados Extraídos do Objeto ---");
console.log("Mensagem:", respostaObjeto.mensagem);
console.log("Produtos recebidos:", respostaObjeto.dados);