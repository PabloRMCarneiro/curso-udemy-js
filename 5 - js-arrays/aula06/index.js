const numero = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

const soma = numero.reduce((acumulador, valor) => acumulador + valor, 0);
// o segundo argumento do .reduce é o valor inicial do acumulador

// maneira de se fazer um filter usando o reduce
const pares = numero.reduce((acumulador, valor)=> {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

// maneira de se fazer um map usando o reduce

const dobro = numero.reduce((acumulador, valor) => {
    acumulador.push(valor*2)
    return acumulador;
}, []);

console.log(soma);
console.log(pares);
console.log(dobro);

const pessoas = [ 
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];

// retorne a pessoas mais velha

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) =>{
   return acumulador.idade > valor.idade ? acumulador: valor;
});

console.log(pessoaMaisVelha.nome);