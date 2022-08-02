function funcao(){
    // só é valido para function expression 'function (){}'
    console.log(arguments);
}

funcao(1,2,3,4,5,6,7);

function soma (){
    let soma = 0;
    for(let argumento of arguments){
        soma += argumento;

    }
    return soma;
}

console.log(soma(1,2,3,4,5,6,7,8,9,10))

function teste1 (a, b = 0){
    /* b = b || 0; // se b não tiver nenhum valor, não foi passado como argumento, então o valor padrão é 0 (podendo ser qualquer outro) */
    console.log(a + b)
}

teste1(2)

function teste2 ({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let obj = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20
}

teste2(obj)

function teste3 ([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

teste3(['Pablo', 'Ryan', 20])

