const alunos = [
{nome: "Iago",nota:2},
{nome: "Tonho",nota:4},
{nome: "Vinicius",nota:7},
{nome: "Marjory",nota:8}
];
console.log(alunos)
console.log("==============================")
const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
console.log(aprovados)
console.log("==============================")

aprovados.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} e bom e tirou nota ${aluno.nota}`)
    
});