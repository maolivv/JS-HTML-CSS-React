// quando voce quer que o módulo tenha apenas uma funcionalidade, voce pode exportar assim:
module.exports = class Animal {
    constructor(race) {
        this.race = race;
    }
    andar() {
        console.log('olha o caminhar do elemento, é o passo bem lento, vai fechando o tempo...');
    }
}