// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto retangulo com largura, altura e um método calcularArea().
// O método deve retornar largura * altura. Mostre a área no console.
//
// Escreva sua solução abaixo:

const retangulo = {
    largura: 7,
    altura: 15,
    metodo(){
        const final = this.largura * this.altura
        console.log(final)
    }
}
retangulo.metodo()