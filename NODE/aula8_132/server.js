// pasta node_modules apagada para economizar espaço, mas só digitar o comando: npm install no terminal pra recuperar ela

// agora executar no terminal: npx nodemon server.js para o Nodemon ficar vigiando qualquer alteração e atualizar a pagina lá no client

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // permite ter acesso ao Body do POST

// Métodos HTTP e CRUD com funções correspondentes:
// CRUD ---->   CREATE  READ    UPDATE  DELETE
// HTTP ---->   POST    GET     PUT     DELETE


// captura uma request do client na home e manda uma resposta...essa request é enviada sempre que o navegador tenta acessar a home
// ele usa a tag 'name' pra identificar esses campos
app.get('/', (request, response) => {
    response.send(`<form action="/" method="post">
        Nome do cliente: <input type="text" name="nome_cliente">
        Email do cliente <input type="text" name="email_cliente">
                        <button>Enviar</button>
                    </form>`);
});

// criando um método POST no Home que vai enviar as informações de um formulário
app.post('/', (req, res) => {
    console.log(req.body); //
    res.send(`informações que você enviou: ${req.body.nome_cliente}`);
});

// um get que envia no request parâmetros que ele vai enviar para o servidor, no caso, tudo que vier depois do testes/ será um parâmetro
// o '?' no final do nome do parâmetro diz para o método que o envio deste parâmetro é opcional
// se não incluir o '?' nós não conseguiremos mais acessar a página /testes sem enviar algum parâmetro
app.get('/testes/:idUsuario?', (request, response) => {
    console.log(request.params);
    console.log(request.query); // exemplo de query: testes/?nome=Marcelo&sobrenome=Oliveira&idade=23
    response.send(request.params.idUsuario); // envia o parâmetro recebido pelo servidor de volta para o HTML da página
});


// parecido com um eventListener, mas do lado do server, fica vigiando qualquer request que apareça na porta 3000
app.listen(3000, () => { console.log('Servidor executando na porta 3000, no endereço http://localhost:3000') });