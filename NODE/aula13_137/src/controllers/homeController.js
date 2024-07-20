const HomeModel = require('../models/HomeModel'); // importando o model

HomeModel.create({ titulo: 'Sweet Home Alabama', descricao: 'Uma música' })
    .then((dados => console.log(dados))).catch((e) => console.log(e)); // criando os registros na tabela

exports.PaginaInicial = (req, res) => {
    res.render('home.ejs');
};


exports.EnviaFormulario = (req, res) => {
    console.log(req.body);
    res.send(`informações que você enviou:\n ${req.body.nome_cliente} \n\t ${req.body.email_cliente}`);
};