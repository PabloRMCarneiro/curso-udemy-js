/* regex de cpf */
const input = document.querySelector(".cpf");
const btn = document.querySelector(".btn-submit");
const resultado = document.querySelector(".resultado");
let cpf = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

function validarCPF(cpfValido) {
  let cpf = Array.from(cpfValido.replace(/\D+/g, ""));

  return cpf[9] == primeiroDigito(cpf) && cpf[10] == segundoDigito(cpf)
   
};

function primeiroDigito(cpf) {
  let primeiroNumero = 0;
  let contadorPrimeiroNumero = 10;
  for (let i = 0; i < 9; i++) {
    primeiroNumero += parseInt(cpf[i]) * contadorPrimeiroNumero;
    contadorPrimeiroNumero--;
  }
  primeiroNumero = 11 - (primeiroNumero % 11);

  primeiroNumero <= 9
    ? (primeiroNumero = primeiroNumero)
    : (primeiroNumero = 0);

  return primeiroNumero;
};

function segundoDigito(cpf) {
  let contadorSegundoNumero = 11;
  let segundoNumero = 0;
  for (let i = 0; i < 10; i++) {
    segundoNumero += parseInt(cpf[i]) * contadorSegundoNumero;
    contadorSegundoNumero--;
  }
  segundoNumero = 11 - (segundoNumero % 11);

  segundoNumero <= 9 ? (segundoNumero = segundoNumero) : (segundoNumero = 0);

  return segundoNumero;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (input.value.match(cpf)) {
    if (validarCPF(input.value)) {
      resultado.innerHTML = "CPF válido!";
      resultado.style.color = "green";
    } else {
      resultado.innerHTML = "CPF inválido!";
      resultado.style.color = "red";
    }
  } else {
    resultado.innerHTML = "Formato de CPF inválido!";
    resultado.style.color = "red";
  }
});
