// Essa aula trata sobre atribuição via desestruturação de arrays

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// atribuindo valores via desestruturação, e empacotando os valores posteriores ao ultimo atribuído na variavel 'rest'
[um, , tres, , cinco, ...rest] = numeros;

console.log(um);

// perceba que o 2 e o 4 não estão no 'rest' pois ele só empacota os numeros posteriores ao ultimo atribuido individualmente, não a lista toda
console.log(rest);

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Fürst',
    idade: 22,
};

// atribuindo por desestruturação do objeto
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// atribuindo por desestruturação do objeto, porem agora mudando o nome da variavel que irá receber o valor, e setando um valor padrão pra ela
const { nome: nome2 = '', sobrenome: sobrenome2 = '' } = pessoa;
console.log('nome2: ' + nome2 + '\tsobrenome2: ' + sobrenome2);