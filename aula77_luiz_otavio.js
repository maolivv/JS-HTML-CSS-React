// função construtora é a mesma coisa que factory function
// porém o factory function a gente faz manualmente e a função construtora é mais "automatizada" em sua construção

function Pessoa(nome, sobrenome, idade) {
    const ID = 1; // atributo privado
    const metodoPrivado = () => { console.log('Método privado') }; // método privado
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.saudacao = () => { console.log('E QUANDO AS CANECAS SE CHOCAM...') };
}

pessoa1 = new Pessoa('Maria', 'Fürst', 22);

pessoa1.saudacao();


// O CÓDIGO ABAIXO NÃO TEM NADA A VER COM A AULA, ESTAVA TESTANDO O ...SPREAD PRA CONCATENAR ARRAYS

vetor1 = [1, 2, 3, 4, 5];

vetor2 = [...vetor1]; // usando o ...spread para concatenar o vetor2 com o vetor1

console.log(typeof vetor1, vetor2)