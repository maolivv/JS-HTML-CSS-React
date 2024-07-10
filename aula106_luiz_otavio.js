// 706.484.450-52 070.987.720-03
// validação de CPF com classes

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, // não pode mudar seu valor
            enumerable: false, // não pode ser exibido quando invocado
            configurable: false, // não pode ser configurado
            value: cpfEnviado.replace(/\D+/g, '') // retira do CPF enviado tudo que não for número
        });
    }

    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // testa se é sequencia, exemplo: 11111111111
    }
    valida() {
        if (!this.cpfLimpo) return false;
        if (this.cpfLimpo.length != 11) return false;
        if (typeof this.cpfLimpo != 'string') return false;
        if (this.isSequence()) return false;
        return 'CPF VALIDO!';
    }
}

cpf = new ValidaCPF('');

console.log(cpf.valida());