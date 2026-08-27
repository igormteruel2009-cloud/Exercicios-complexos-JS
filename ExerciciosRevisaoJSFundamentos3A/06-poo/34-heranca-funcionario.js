// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Pessoa com nome e um método apresentar().
// Crie a classe Funcionario que herde de Pessoa e receba também o cargo.
// Utilize super() no constructor e sobrescreva apresentar() incluindo o cargo.
//
// Escreva sua solução abaixo:

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}.`;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, cargo) {
    super(nome);
    this.cargo = cargo;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e trabalho como ${this.cargo}.`;
  }
}


const pessoa1 = new Pessoa("Ana");
console.log(pessoa1.apresentar()); 