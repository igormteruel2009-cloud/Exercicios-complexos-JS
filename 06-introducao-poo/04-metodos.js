class Pessoa{
    constructor(nome,nota){
        this.nome = nome
        this.nota = nota
    };

apresentar(){
    console.log(`Alunos: ${this.nome} - Nota: ${this.nota}`);
    }
}
const aluno1 = new Pessoa("ana", 17);
const aluno2 = new Pessoa("antonio", 17);
console.log(aluno1.apresentar());
console.log(aluno2.apresentar());

