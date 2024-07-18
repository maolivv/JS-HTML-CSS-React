// pasta node_modules apagada para economizar espaço, mas só digitar o comando: npm install no terminal pra recuperar ela

const express = require('express');
const app = express();

// Métodos HTTP e CRUD com funções correspondentes:
// CRUD ---->   CREATE  READ    UPDATE  DELETE
// HTTP ---->   POST    GET     PUT     DELETE


// captura uma request do client na home e manda uma resposta...essa request é enviada sempre que o navegador tenta acessar a home
app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/contato', (request, response) => {
    response.send('Página de contato');
});


// parecido com um eventListener, mas do lado do server, fica vigiando qualquer request que apareça na porta 3000
app.listen(3000, () => { console.log('Servidor executando na porta 3000, no endereço http://localhost:3000') });