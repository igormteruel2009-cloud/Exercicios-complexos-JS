// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe ContaBancaria com o campo privado #saldo.
// Crie os métodos depositar(valor), sacar(valor) e consultarSaldo().
// Não permita saque maior que o saldo disponível.
//
// Escreva sua solução abaixo:

// EXERCÍCIO 32 - ENCAPSULAMENTO

class ContaBancaria {
  #saldo;

  constructor(saldoI = 0) {
    this.#saldo = saldoI;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("O valor do depósito deve ser maior que zero.");
    }
  }


  sacar(valor) {
    if (valor <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
    } else if (valor > this.#saldo) {
      console.log(`Saldo insuficiente. Saldo atual: R$ ${this.#saldo.toFixed(2)}`);
    } else {
      this.#saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
  }

  // Método para consultar o saldo privado
  consultarSaldo() {
    return `Saldo atual: R$ ${this.#saldo.toFixed(2)}`;
  }
}

// --- Testando a classe ---

const minhaConta = new ContaBancaria(100); // Saldo inicial: R$ 100

console.log(minhaConta.consultarSaldo()); // Saldo atual: R$ 100.00

minhaConta.depositar(50);                 // Depósito de R$ 50.00
console.log(minhaConta.consultarSaldo()); // Saldo atual: R$ 150.00

minhaConta.sacar(200);                    // Saque negado! Saldo insuficiente...
minhaConta.sacar(70);                     // Saque de R$ 70.00
console.log(minhaConta.consultarSaldo()); // Saldo atual: R$ 80.00

// Tentativa de acesso direto ao campo privado (gera erro de sintaxe):
// console.log(minhaConta.#saldo); // Uncaught SyntaxError: Private field '#saldo' must be declared in an enclosing class