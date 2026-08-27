// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Animal com o método emitirSom().
// Crie as classes Cachorro e Gato herdando de Animal.
// Sobrescreva emitirSom() em cada classe com um som diferente.
// Coloque os animais em um array e chame o método de cada um.
//
// Escreva sua solução abaixo:

// Classe pai (superclasse)
class Animal {
  emitirSom() {
    console.log("O animal faz um som.");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Au Au!");
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("Miau!");
  }
}

// 1. Criando os objetos e colocando em um array
const animais = [
  new Cachorro(),
  new Gato(),
  new Cachorro()
];

// 2. Percorrendo o array e executando o método emitirSom() de cada um
animais.forEach(animal => animal.emitirSom());