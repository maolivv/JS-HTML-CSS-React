exports.PaginaInicial = (req, res) => {
    res.send(`<form action="/" method="post">
        Nome do cliente: <input type="text" name="nome_cliente">
        Email do cliente <input type="text" name="email_cliente">
                        <button>Enviar</button>
                    </form>`);
};

exports.EnviaFormulario = (req, res) => {
    console.log(req.body);
    res.send(`informações que você enviou:\n ${req.body.nome_cliente} \n\t ${req.body.email_cliente}`);
};