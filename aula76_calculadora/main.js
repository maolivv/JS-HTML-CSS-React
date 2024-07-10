function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn btn-del'),
        init(){
            this.cliqueBotoes();
            this.pressionaEnter();
            this.display.value = 0;
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => { // adicionando um eventListener pra tecla Enter
                if (e.keyCode === 13) {
                    alert('O resultado é: ' + eval(this.display.value)); // usando a função eval() para realizar a operação
                    this.display.value = 0;
                }
            });
        },
        cliqueBotoes() {
            document.addEventListener( // adicionando um eventListener pra capturar os cliques nos numeros
                'click', function (e) {
                    const elemento = e.target; // variavel 'elemento' recebe o target do evento clique
                    if (elemento.classList.contains('btn-num')) { // caso o target tenha 'btn-num' no nome de sua classe...
                        if (this.display.value == 0) this.display.value = ''; // tira o 0 do valor inicial do display no primeiro click
                        this.btnParaDisplay(elemento.innerText); // executa o método, que recebe o HTML interno da tag como valor
                    }
                    else if (elemento.classList.contains('btn-clear')) {
                        this.display.value = 0; // apaga tudo e volta o valor pro 0 denovo
                    }
                    else if (elemento.classList.contains('btn-del')) {
                        this.display.value = this.display.value.slice(0, -1); // apaga o ultimo caractere
                        if (this.display.value == '') this.display.value = 0; // quando apagar tudo, ao inves de ficar vazio, volta pro 0
                    }
                    else if (elemento.classList.contains('btn-eq')) {
                        try {
                            this.display.value = eval(this.display.value); // usando a função eval() para realizar a operação
                        } catch (e) {
                            alert('Operação Inválida!');
                            this.display.value = 0;
                            return;
                        }
                    }
                    else if (elemento.classList.contains('display')) {
                        this.display.value = '';
                    }
                }.bind(this) // troca a referencia do 'this', que ao inves de apontar para o document, aponta para o objeto Calculadora
            )
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

calculadora = criaCalculadora();
calculadora.init();