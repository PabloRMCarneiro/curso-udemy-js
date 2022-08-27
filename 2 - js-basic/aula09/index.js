// arrays basicos

const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);

console.log(alunos[0]); // primeiro elemento 

console.log(alunos[0][0]); // primeira letra do primeiro elemento

console.log(alunos[0][alunos[0].length - 1]); // ultima letra do primeiro elemento 

alunos[3] = 'Luiza'; // adicionando um novo elemento sabendo o ultimo indice do array

alunos[alunos.length] = 'Karlos' // adicionando um novo elemnto sem saber o tamanho a priori

console.log(alunos)

alunos.push('Pedro'); // adicionando um novo elemento sem saber o tamanho a priori (outra forma MAIS PRATICA)

console.log(alunos)

alunos.unshift('Ana'); // adicionando um novo elemento no inicio do array

console.log(alunos)

alunos.pop(); // removendo o ultimo elemento do array , pode salvar o valor removido em uma variavel -> const removido = alunos.pop();

console.log(alunos) 

alunos.shift(); // removendo o primeiro elemento do array

console.log(alunos)

console.log(alunos.slice(0, 3)); // fatiando o array do primeiro argumento até o segundo argumento menos um.

console.log( alunos instanceof Array); // verificando se é um array