const express = require('express');
const route = express.Router(); // roteador que vai controlar as rotas da aplicação
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// rotas da Home
route.get('/', homeController.PaginaInicial);
route.post('/', homeController.EnviaFormulario);

route.get('/contato', contatoController.PaginaContato)

module.exports = route;