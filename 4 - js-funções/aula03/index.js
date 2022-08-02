function falaFrase (comeco){
    function falaResto (resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo)
console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador){
    return function (numero){
        return numero * multiplicador;
    };
}

console.log(criaMultiplicador(2)(5));
// mesmo resultado
const duplicador = criaMultiplicador(2);
console.log(duplicador(5));