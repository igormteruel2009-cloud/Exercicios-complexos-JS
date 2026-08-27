class Funcionario{
    constructor(nome,salario){
        this.nome = nome;
        this.salario = salario;
    }
    apresentar(){
        console.log(`${this.nome} ganha de Salario: ${this.salario}`);
    }
}