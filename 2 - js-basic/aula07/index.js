// Mais sobre numbers

let num1 = 1;
let num2 = 2;


console.log(num1.toString() + num2.toString()); // converte temporariamente para string e concatena

num1 = num1.toString(); // converte permanente para string 

let num3 = 10.5381456784591;

console.log(num3.toFixed(2)); // arredonda o numero para duas casas decimais

console.log(Number.isInteger(num2)); // verifica se o numero é um inteiro (true or false) -> true
console.log(Number.isInteger(num3)); // como é um decimal nesse caso ele retorna false

let temp = num2 * 'num1';// Não é um numero pois o 'num1' é uma string e o num2 é um inteiro.

console.log(Number.isNaN(temp)); // verifica se o numero é um numero -> false eh um numero e true não é um numero

