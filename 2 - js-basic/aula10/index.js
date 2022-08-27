function saudacao(nome){
    console.log(`Oi ${nome}`);
}

function soma(x = 1, y = 1){ // se chamar a função sem os parametros, o valor padrão é descrito pós =
    return x + y;
}

saudacao('Pablo');

console.log(soma(3, 4));

console.log(soma());

const raiz = function(x){
    return x ** 0.5;
};

console.log(raiz(25));

// Arrow function

/* const potenciação = (x, y) =>{
    return x ** y;
};
 */

// simplificação

const potenciação = (x, y) => x ** y;

console.log(potenciação(2, 10));
