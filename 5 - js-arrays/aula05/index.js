const numero = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

const duplicar = numero.map(valor => valor*2);

console.log(duplicar);

const pessoas = [ 
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Retorne apenas um string com o nome da pessoa 
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto com

const stringNome = pessoas.map(pessoas => pessoas.nome);

console.log(stringNome);

const removerChaveNome = pessoas.map(pessoas => delete pessoas.nome);

console.log(pessoas);

const adicioneChaveID = pessoas.map((pessoas, indice) => pessoas.ID = indice);

console.log(pessoas);

// os valores são passados por referência, se quiser por cópia, usar o spread operator
// const newPessoas = [...pessoas]
// const newObj = {... obj}