const fs = require('fs').promises; // importando os métodos de promises do módulo FileSystem do Node
const path = require('path'); // importando o módulo Path do Node

// importando os módulos
const moduloEscreveArquivo = require('./escreveArquivo');
const moduloLerArquivo = require('./lerArquivo');

const caminhoArquivoTXT = path.resolve(__dirname, 'teste.txt'); // path do arquivo txt
const caminhoArquivoJSON = path.resolve(__dirname, 'teste.json'); // path do arquivo JSON

// criando a lista de objetos que vai ser passada como JSON pro arquivo novo que vai ser criado
const clientes = [
    {
        nome: 'Marcelo',
        sobrenome: 'Oliveira',
        idade: 23,
    },
    {
        nome: 'Maria',
        sobrenome: 'Fürst',
        idade: 22,
    }
];

moduloEscreveArquivo.escreveArquivoJSON(clientes, caminhoArquivoJSON); // criando arquivo json com flag 'w' porque o 'a' tava dando problema
moduloEscreveArquivo.escreveArquivoTXT('Ola mundo', caminhoArquivoTXT); // criando arquivo txt com flag 'w'

// criando função assíncrona para mostrar os dados lidos no console, porque o módulo .readFile retorna uma promise
async function ler(caminhoDoArquivo) {
    const dadosDoArquivo = await moduloLerArquivo(caminhoDoArquivo);
    mostraDados(dadosDoArquivo); // função que eu vou criar só pra dar um console.log senão eu teria que fazer isso com um .then
}

// função criada só pra dar um console.log e mostrar os dados
function mostraDados(dados) {
    const dadosString = JSON.parse(dados); // transforma o objeto JSON de volta em um código Javascript
    console.log(dadosString);
}

// executando a função assíncrona e lendo em formato Javascript o arquivo JSON que foi gerado
ler(caminhoArquivoJSON);