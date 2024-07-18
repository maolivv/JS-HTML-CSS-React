// aqui vamos ver a forma do Node trabalhar com modulos, que é diferente do Javascript Vanilla

const nome = 'Marcelo';
const sobrenome = 'Oliveira';

const falaNome = () => {
    console.log(`O nome inteiro é: ${nome} ${sobrenome}`);
};

// module.exports.nome = nome
exports.nome = nome;

// module.exports.sobrenome = sobrenome
exports.sobrenome = sobrenome;

// module.exports.falaNome
exports.falaNome = falaNome;

console.log(module.exports); // mostra o objeto do node que vai guardar os valores exportados