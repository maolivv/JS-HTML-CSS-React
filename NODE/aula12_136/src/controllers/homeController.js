exports.PaginaInicial = (req, res) => {
    res.render('home.ejs');
};

exports.EnviaFormulario = (req, res) => {
    console.log(req.body);
    res.send(`informações que você enviou:\n ${req.body.nome_cliente} \n\t ${req.body.email_cliente}`);
};