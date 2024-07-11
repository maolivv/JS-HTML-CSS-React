// aula sobre async/await
// é basicamente um substituto para o .then() que fica muito verboso e as vezes pode ficar meio confuso se houverem muitos .then() aninhados

function timer(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('deu erro.'); // se der algum erro o "reject" vai ser acionado e retornará 'deu erro" como resposta

        setTimeout(() => {
            resolve(msg); // se der tudo certo, vai retornar a 'msg' como resposta
        }, tempo)
    })
}

async function executaPromise() {
    try { // usando um try-catch aqui porque async/await não tem catch pra tratar o erro do reject()
        const fase1 = await timer('Fase 1 Completa.', 3000);
        console.log(fase1);
        const fase2 = await timer('Fase 2 Completa.', 1000);
        console.log(fase2);
        const fase3 = await timer('Fase 3 Completa.', 500);
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
}

executaPromise();