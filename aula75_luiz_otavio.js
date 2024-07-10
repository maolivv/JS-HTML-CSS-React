// Essa aula é sobre Factory Functions

// factory function que cria um objeto do tipo pessoa
function criaPessoa(nome, altura, peso) {
    return {
        nome,
        altura,
        peso,
        // o 'get' faz o método imc() se comportar como um atributo, não sendo mais necessario o uso de () sempre que for chamar o IMC
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        // Getter
        get nomeCompleto() {
            return this.nome_todo;
        },
        // Setter
        set nomeCompleto(valor) { // esse 'valor' é o sobrenome dado na hora da atribuição, no caso da pessoa1, valor = 'Maria Fürst'
            this.nome_todo = valor;
        }
    }
}


pessoa1 = criaPessoa('Maria', 1.60, 48); //instanciando uma pessoa

console.log(pessoa1.imc); // mostrando o imc da pessoa1


pessoa2 = criaPessoa('Marcelo', 1.76, 65); //instanciando uma outra pessoa

console.log(pessoa2.imc); //mostrando o imc da pessoa2

pessoa1.nomeCompleto = 'Maria Fürst'; // valor que será enviado como parâmetro para o Setter

console.log(pessoa1.nomeCompleto); // mostrando o nome completo da pessoa1

pessoa2.nomeCompleto = 'Marcelo Oliveira'; // valor que será enviado como parâmetro para o Setter

console.log(pessoa2.nomeCompleto);