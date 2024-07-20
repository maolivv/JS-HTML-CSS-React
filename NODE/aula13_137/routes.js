const express = require('express');
const route = express.Router(); // roteador que vai controlar as rotas da aplicação
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// middlewares são funções que executam entre duas outras execuções, geralmente pra validar algo, ou persistir algum dado durante a sessão
function homeMiddleware(req, res, next) { // toda função que recebe 'req' e 'res' como parâmetro pode ser um middleware
    console.log('\n\npassei pelo primeiro middleware...\n\ndados persistidos:'); // aparentemente o middleware só roda no servidor, não no client
    req.session = { nome: req.body.nome_cliente, email: req.body.email_cliente }; // persiste os dados durante a sessão daquele cliente
    next();
}


// rotas da Home
route.get('/', homeController.PaginaInicial);
route.post('/',homeMiddleware, homeController.EnviaFormulario)

module.exports = route;