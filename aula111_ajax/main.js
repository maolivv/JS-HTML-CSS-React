// criando um request assincrono com ajax


const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); // o ultimo argumento pergunta se é uma requisição assíncrona. TRUE ou FALSE pro parâmetro
    xhr.send(); // se fosse pra carregar um formulario ou algo assim seria necessario mandar os dados aqui dentro, mas é so um GET então pode ficar vazio
    
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) { // a condição testada aqui é se a resposta HTTP foi de sucesso ou não
            obj.success(xhr.responseText); // esse responseText ja vai enviar todos os dados para serem carregados
        }
        else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        }
    });
};

// agora adicionando um eventListener, pra quando um dos hiperlinks foi clicado, nós carregarmos as outras páginas
document.addEventListener('click', e => {
    const tag = e.target.tagName.toLowerCase(); // capturando o nome da tag que foi clicada
    if (tag === 'a') {
        e.preventDefault(); // impede a pagina clicada de carregar automaticamente, já que carregaremos ela dinamicamente na própria Home
        loadPage(e.target);
    }
});

function loadPage(elemento) {
    const href = elemento.getAttribute('href');
    div = document.querySelector('.resultado');
    // agora vamos enviar para o método 'request' um objeto contendo os atributos necessarios
    request({
        method: 'GET',
        url: href,
        success(response) {
            div.innerHTML = response;
            alert('Pagina carregada com sucesso.');
        },
        error(obj) {
            alert(`Código de erro: ${obj.code}\n${obj.msg}\n`)
        }
    });

}