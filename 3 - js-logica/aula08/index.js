// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO DE OBJETOS

const pessoa = {
    nome: 'João',
    sobrenome: 'Pessoa',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 123
    }
};

const { nome, sobrenome, idade} = pessoa;

const {nome: teste} = pessoa;

const {endereco: {rua, numero}} = pessoa;

const {nome2, ...resto} = pessoa;

console.log(nome, sobrenome, idade)

console.log(teste)

console.log(rua, numero)

console.log(resto)