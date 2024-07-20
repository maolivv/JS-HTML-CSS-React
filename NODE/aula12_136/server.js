// pasta node_modules apagada para economizar espaço, mas só digitar o comando: npm install no terminal pra recuperar ela

// agora executar no terminal: npx nodemon server.js para o Nodemon ficar vigiando qualquer alteração e atualizar a pagina lá no client

const express = require('express');
const app = express();
const routes = require('./routes'); // importando as rotas
const path = require('path'); // importando Path do Express pra usar caminho absoluto pras Views

app.use(express.urlencoded({ extended: true })); // permite ter acesso ao Body do POST
app.use(routes); // dizendo para o Express usar as rotas que nós criamos para as requisições
app.use(express.static(path.resolve(__dirname, 'public'))); // mandando o node usar a pasta Public como pasta de arquivos estáticos que serão exibidos no navegador (bundle, imagens, css, etc)
app.set('views', path.resolve(__dirname, 'src', 'views')); // settando o caminho pras views, ele ja vai buscar automaticamente de lá
app.set('view engine', 'ejs'); // usando EJS pra renderizar as views



// parecido com um eventListener, mas do lado do server, fica vigiando qualquer request que apareça na porta 3000
app.listen(3000, () => { console.log('Servidor executando na porta 3000, no endereço http://localhost:3000') });