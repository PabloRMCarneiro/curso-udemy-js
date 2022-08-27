const pessoa = {
  nome: "João",
  sobrenome: "Silva",
  idade: 20,
};

const key = "idade";

console.log(pessoa[key]);
console.log(pessoa["nome"]);
console.log(pessoa.sobrenome);

const pessoa2 = new Object();

pessoa2.nome = "João";
pessoa2.sobrenome = "Silva";
pessoa2.idade = 20;

console.log(pessoa, pessoa2);

delete pessoa2.nome;

console.log(pessoa2);

pessoa2.falarSobrenome = function () {
  return `Meu sobrenome é ${this.sobrenome}`;
};

pessoa2.getAnoNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa2.falarSobrenome());
console.log(pessoa2.getAnoNascimento());

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa("João", "Silva");
