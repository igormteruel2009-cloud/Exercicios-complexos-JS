// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Veiculo com constructor para marca, modelo e ano.
// Crie um método exibirDados() e duas instâncias da classe.
// Mostre os dados dos dois veículos.
//
// Escreva sua solução abaixo:

class Veiculo {
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
const cevete = new Veiculo("Crevrolet","SL8",2008 );
console.log(cevete);