class ContaBancaria{
    #saldo = 0;

    depositar(valor){
        if(valor > 0) this.#saldo += valor;
    };

    consultarSaldo(){
        return this.#saldo
    };
}
const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.consultarSaldo());
conta.depositar(100);
console.log(conta.consultarSaldo());