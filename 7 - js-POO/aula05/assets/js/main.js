class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  /**
   * The function eventos() is called in the constructor, and it adds an event
   * listener to the form, which calls the handleSubmit() function when the form
   * is submitted
   */
  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  /**
   * The handleSubmit function is called when the form is submitted. It prevents
   * the default action of the form from happening, and then calls the
   * validaFormulario function
   * @param e - the event object
   */
  /**
   * If the fields are valid, send the form, otherwise show the errors
   * @param e - the event object
   */
  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if( camposValidos && senhasValidas){
      alert('Formulario enviado');
      this.formulario.submit();
    }
  }

  
  /**
   * It loops through all the elements with the class 'validar' and checks if they
   * have a value. If they don't, it creates an error message
   */
  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      let label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `O campo ' ${label} ' é obrigatório`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  senhasSaoValidas(){
    let valid = true;
    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");
    
    if(senha.value !== repetirSenha.value){
      valid = false;
      this.criaErro(senha, `Campos 'senha' e 'repetir senha' precisam ser iguais`);
      this.criaErro(repetirSenha, `Campos 'senha' e 'repetir senha' precisam ser iguais`);
    }
    if(senha.value.length < 6 || senha.value.length > 12){
      valid = false;
      this.criaErro(senha, `Campo 'senha' precisa ter entre 6 e 12 caracteres`);
    }
    return valid;
  }

  /**
   * It checks if the username is between 3 and 12 characters long, and if it
   * contains only letters and numbers
   * @param campo - The field to be validated.
   * @returns the value of the variable valid.
   */
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "O usuário deve ter entre 3 e 12 caracteres");
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "O usuário deve conter apenas letras ou/e números");
      valid = false;
    }

    return valid;
  }

  /**
   * It validates the CPF number and returns true if it's valid or false if it's
   * not
   * @param campo - The field that will be validated.
   * @returns a boolean value.
   */
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF inválido");
      return false;
    }

    return true;
  }
  /**
   * It creates a div element, adds a class to it, and inserts it after the field
   * that has the error
   * @param campo - The field that will receive the error message.
   * @param msg - The error message to be displayed.
   */
  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
