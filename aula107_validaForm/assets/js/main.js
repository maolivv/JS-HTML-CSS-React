class validaFormulario{
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.events();
  }
  events() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e); // chama a função que vai tratar o submit
    })
  }
  handleSubmit(e) {
    e.preventDefault(); // impede o envio imediato das informações do formulario
    console.log('Envio impedido.');
    const camposValidos = this.isValid(); // se tiver tudo certo, vai receber True, senão, vai receber False
    const senhasValidas = this.passwordIsValid();

    if (camposValidos && senhasValidas) alert('Formulario enviado.');
    // this.formulario.submit();
  }

  // metodo que testa se a senha fornecida é valida
  passwordIsValid() {
    let valido = true;
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');
    
    // testando pra ver se a senha é igual ao campo 'repetir senha'
    if (senha.value !== repetirSenha.value) {
      valido = false;
      this.createError(senha, 'campos Senha e Repetir Senha precisam ser iguais');
      this.createError(repetirSenha, 'campos Senha e Repetir Senha precisam ser iguais');
    }

    // testando tanto a Senha quanto o Repetir senha para conferir se o tamanho da string está correto
    if (senha.value.length < 6 || senha.value.length > 12) {
      valido = false;
      this.createError(senha, 'Senha precisa ter entre 6 e 12 caracteres');
    }
    if (repetirSenha.value.length < 6 || repetirSenha.value.length > 12) {
      valido = false;
      this.createError(repetirSenha, 'campo Senha é invalido.');
    }

    return valido;
  }

  // metodo que testa se os campos são validos
  isValid() {
    let valido = true; // recebe True por padrão e se tiver algo errado durante a validação esse valor vai se tornar False

    // executa sempre que o formulario for enviado
    //  precisa estar antes da validação pra não apagar as mensagens de erro que vão ser criadas ali na frente também
    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove(); // remove as msgs de erro anteriores, pra não ficar empilhando uma em cima da outra sempre que clicar em Enviar
    }

    // loop de validação dos campos do formulario
    for (let campo of this.formulario.querySelectorAll('.validar')) { // captura todos os campos do formulario que possuem 'validar' em sua classe
      const label = campo.previousElementSibling.innerText; // captura o nome do campo que esta sendo validado

      // checando campos em branco
      if (!campo.value) {
        this.createError(campo, `${label} não pode estar vazio.`);
        valido = false;
      }

      // validando cpf
      if (campo.classList.contains('cpf')) {
        if (!this.testaCPF(campo)) valido = false;
      }
      // validando usuario
      if (campo.classList.contains('usuario')) {
        if (!this.testaUsuario(campo)) valido = false;
      }
    }
    return valido;
  }

  // metodo que levanta um erro caso exista
  createError(campo, msg) {
    const div = document.createElement('div'); // a div que exibirá a mensagem de erro dentro do formulario
    div.innerHTML = msg;
    div.style.color = 'red';
    div.classList.add('error-text'); // adiciona uma classe com o nome de 'error-text' para essa div
    campo.insertAdjacentElement('afterend', div); // inserindo a mensagem de erro embaixo do campo com erro
  }

  // metodo que usa a classe ValidaCPF criada no script validaCPF.js para retornar True ou False
  testaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    if (!cpf.valida()) {
      this.createError(campo, 'CPF inválido.');
      return false;
    }
    return true;
  }
  testaUsuario(campo) {
    const usuario = campo.value;
    let valid = true // variavel apenas para fins de logica, valor final será retornado no fim da função
    if (usuario.length > 12 || usuario.length < 3) {
      this.createError(campo, 'Usuario precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) { // checando para ver se o campo contem apenas letras e numeros
      this.createError(campo, 'Usuario pode conter apenas letras e numeros.');
      valid = false;
    }
    return valid;
  }
}

const validacao = new validaFormulario();