// agora executar no terminal: npx nodemon server.js OU npm start

require('dotenv').config(); // vai configurar um arquivo que vamos criar parecido com o .gitignore, pra colocar arquivos que não queremos que vá para o repositório

const express = require('express');
const app = express();

const mongoose = require('mongoose'); // importando o mongoose pro servidor

const connectionString = process.env.CONNECTIONSTRING; // usando o CONNECTIONSTRING lá do nosso arquivo .env
mongoose.connect(connectionString).then(() => {
    console.log('Conectado.');
    app.emit('base de dados conectada.'); // emite um sinal que vai ser capturado pelo server pra só então o servidor iniciar
}).catch((e) => console.log(e)); // captura um erro caso ocorra algum

const routes = require('./routes'); // importando as rotas
const path = require('path'); // importando Path do Express pra usar caminho absoluto pras Views
const globalMiddleware = require('./src/middlewares/globalMiddleware');

app.use(express.urlencoded({ extended: true })); // permite ter acesso ao Body do POST

// mandando o Express executar o middleware em toda requisição do sistema
app.use(globalMiddleware); // só tá executando antes de todas as rotas porque eu dei 'use' nele antes dou 'routes' aqui
app.use(routes); // dizendo para o Express usar as rotas que nós criamos para as requisições

app.use(express.static(path.resolve(__dirname, 'public'))); // mandando o node usar a pasta Public como pasta de arquivos estáticos que serão exibidos no navegador (bundle, imagens, css, etc)
app.set('views', path.resolve(__dirname, 'src', 'views')); // settando o caminho pras views, ele ja vai buscar automaticamente de lá
app.set('view engine', 'ejs'); // usando EJS pra renderizar as views


// espera o sinal do banco de dados pra só então começar a responder as requisições
app.on('base de dados conectada.', () => {
    // parecido com um eventListener, mas do lado do server, fica vigiando qualquer request que apareça na porta 3000
    app.listen(3000, () => { console.log('Servidor executando na porta 3000, no endereço http://localhost:3000') });
});

