// aula sobre promises
// métodos úteis: Promise.all() ; Promise.race() ; Promise.resolve() ; Promise.reject() ;

function timer(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('deu erro.'); // se der algum erro o "reject" vai ser acionado e retornará 'deu erro" como resposta

        setTimeout(() => {
            resolve(msg); // se der tudo certo, vai retornar a 'msg' como resposta
        }, tempo)
    })
}

timer('TIMER 1', 10000)
    .then(resposta => { console.log(resposta); return timer('TIMER 2', 20000); }) // a resposta aqui que será mostrada é o TIMER 1
    .then(resposta => { console.log(resposta); return timer('TIMER 3', 3000); }) // aqui é onde será exibida a resposta TIMER 2
    .then(resposta => console.log(resposta)) // aqui é onde vai ser retornada a resposta TIMER 3 e mostrada pelo console.log()
    .catch(resposta => console.log(resposta)); // aqui vai mostrar a resposta de erro