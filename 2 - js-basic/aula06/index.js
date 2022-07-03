// MAIS SOBRE STRINGS

// strings são iteraveis e indexadas

let umaString = 'um Texto';

console.log(umaString[1]);
console.log(umaString.charAt(1));

console.log(umaString.indexOf('Texto')); // retorna o começo do indice do argumento

console.log(umaString.match(/[a-z]/g)); // expressões regulares search()-> retorna 1

console.log(umaString.replace('um', 'Outro')); // substitui o primeiro argumento pelo segundo

console.log(umaString.length); // retorna o tamanho da string

console.log(umaString.slice(0, 3)); // retorna uma parte da string dos indices determinados do primeiro argumento até o segundo argumento

console.log(umaString.split('-')); // retorna um array com a string separada pelo argumento

console.log(umaString.toLowerCase()); // retorna a string em minúsculas

console.log(umaString.toUpperCase()); // retorna a string em maiúsculas


