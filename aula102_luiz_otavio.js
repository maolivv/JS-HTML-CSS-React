// Aula sobre classes
const _numero_de_serie = Symbol() // setando um tipo primitivo Symbol para idade, que vai servir como atributo privado
class Veiculo {
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
        this[_numero_de_serie] = 10024382; // atributo privado
    }

    get serie(){
        return this[_numero_de_serie];
    }
}

v1 = new Veiculo('Suzuki', 2016)
console.log(v1.serie); // usando o getter

class Carro extends Veiculo{ // usando herança para extender da classe pai Veiculo
    constructor(marca, ano, motor, potencia, modelo) {
        super(marca, ano); // precisa instanciar o super() quer é o construtor pai, dentro do construtor, senão não funciona

        this.motor = motor;
        this.potencia = potencia;
        this.modelo = modelo;
    }
}

const carro1 = new Carro('Chevrolet','2008','V8', '210 cavalos', 'chevette'); // instanciando a classe Carro que herda de Veiculo

console.log(carro1.serie);