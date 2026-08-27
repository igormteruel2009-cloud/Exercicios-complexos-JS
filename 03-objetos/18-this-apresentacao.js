// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto pessoa com nome, profissao e um método apresentar().
// O método deve utilizar this e retornar uma frase de apresentação.
//
// Escreva sua solução abaixo:

const alunos = {
    nome : "camily",
    profissao: "servente de pedreiro",
    apresentar(){
        console.log(`meu nome e ${this.nome} e trabalho com ${this.profissao}`);
    }
};
alunos.apresentar();