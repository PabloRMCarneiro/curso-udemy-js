// alet('test'); -> unario operador

//confirm('Deseja confirmar?'); -> true or false

//prompt('Digite seu nome: '); -> Input

// EXERCICIO 3

/* let num1 = prompt('Informe um numero: ');
let num2 = prompt('Informe outro numero: ');

num1 = Number(num1);
num2 = Number(num2);

alert(`A soma dos numeros informados: ${num1+num2}`);
 */
// EXERCICIO 4

/* let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const aux = varA;
varA = varB;
varB = aux;

const aux2 = varB;
varB = varC;
varC = aux2;

alert(`${varA} ${varB} ${varC}`); */

// OUTRA SOLUÇÃO

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

alert(`${varA} ${varB} ${varC}`);