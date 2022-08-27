let nome = 'João';

console.log(nome, 'nasceu em 1984');

let VariavelSemInicialização;

console.log(VariavelSemInicialização);

const nome2 = 'João'; // Não pode ser alterado e não pode declarar sem inicializar pois não se pode alterar o valor

const numero = 15;

console.log(typeof nome2); //typeof retorna o tipo da variável
console.log(typeof numero);

// String + String = Concatenação
let nome3 = nome + nome2;

console.log(nome3);

// Number + Number = Soma

let numero2 = numero + numero;

console.log(numero2);

// EXERCICIO 2

const nome4 = 'Pablo';
const sobrenome = 'Ryan';
const idade = 20;
let peso = 80;
let altura = 1.85;
let IMC = peso/(altura*altura);
let AnoNascimento = 2022 - idade;


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura, 'm de altura e seu IMC é de', IMC, 'e nasceu no ano de', AnoNascimento,'.' );

// template strings

console.log(`${nome} nasceu no ano de ${AnoNascimento}`);

// diferença entre var e let para criação de variaveis

var aux = 'Pablo'; 
var aux = 'Pablo'; // pode-se redaclarar a mesma variável -> preferivel usar let pela usabilidade e leitura do programa



