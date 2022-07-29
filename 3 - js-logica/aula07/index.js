// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO


/* let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

console.log(a, b, c);

[a, b, c] = ['B', 'C', 'A'];

console.log(a, b, c) */

const numeros = [1, 2, 3, 4, 5];

const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);

console.log(resto); // ... o operador chamado de rest, que oega todos os valores restantes do array. Pode-se tambem utilizar de outra maneira

const [um, , tres, , cinco] = numeros;

console.log(um, tres, cinco); // da para pular os indices

const numeros1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(numeros1[0][0]); // primeiro índice do primeiro array

