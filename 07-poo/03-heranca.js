class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

class Aluno extends Pessoa{
    constructor(nome,curso){
        super(nome);
        this.curso = curso;
    }
}
// se possui extend(herda alguma coisa da variavel) precisa ter super(prioridade)
const aluno = new Aluno("Jefferson", "Desenvolvimento de sistemas");
console.log(aluno);