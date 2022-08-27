// Retorn os numeros maiores de 10

const numero = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

function callbackFilter(valor){
    return valor > 10;
}

const numerosFiltrados = numero.filter(callbackFilter);

// outra maneira de se fazer na callbackFilter

const numerosFiltrados2 = numero.filter( valor => valor > 10);

console.log(numerosFiltrados);
console.log(numerosFiltrados2);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra 'a'

const pessoas = [ 
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const cincoLetrasMais = pessoas.filter( pessoas => pessoas.nome.length >= 5);

const pessoaIdosa = pessoas.filter(pessoas => pessoas.idade > 50);

const nomeTerminaComA = pessoas.filter(pessoas => pessoas.nome[pessoas.nome.length - 1] === 'a');

console.log(cincoLetrasMais);
console.log(pessoaIdosa);
console.log(nomeTerminaComA);