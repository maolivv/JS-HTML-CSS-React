class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    // método de instância
    abaixarVolume() {
        this.volume -= 2;
    }
    // método de classe (estática)
    static trocarPilha() {
        console.log('Trocando as pilhas...');
    }
}

const controle1 = new ControleRemoto('Samsung');

controle1.aumentarVolume(); // invocando método de instância
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1.volume); // mostrando o volume aumentado

ControleRemoto.trocarPilha(); // método estático só pode ser invocado pela classe em si
