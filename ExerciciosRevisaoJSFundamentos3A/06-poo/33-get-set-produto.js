// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Produto com o campo privado #preco.
// Crie get preco e set preco. O setter não deve aceitar valores negativos.
// Crie um produto, altere o preço e mostre o resultado.
//
// Escreva sua solução abaixo:

// EXERCÍCIO 33 - GETTERS E SETTERS

class Produto {

  #preco;

  constructor(nome, precoInicial) {
    this.nome = nome;
    this.preco = precoInicial; 
  }

  get preco() {
    return this.#preco;
  }

  // Setter para alterar o preço com validação
  set preco(novoPreco) {
    if (novoPreco < 0) {
      console.log("Erro: O preço não pode ser negativo.");
    } else {
      this.#preco = novoPreco;
    }
  }
}

const meuProduto = new Produto("Teclado Mecânico", 250.00);
console.log(`Preço inicial do ${meuProduto.nome}: R$ ${meuProduto.preco.toFixed(2)}`);


meuProduto.preco = 300.00;
console.log(`Novo preço: R$ ${meuProduto.preco.toFixed(2)}`);


meuProduto.preco = -50.00; // Exibe a mensagem de erro e não altera o valor

// 4. Verificando que o preço continuou sendo o anterior
console.log(`Preço final: R$ ${meuProduto.preco.toFixed(2)}`);