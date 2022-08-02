// declaração de função (Function hoisting)
// pode-se utilizar antes ou depois da declaração

falaOI();

function falaOI() {
    console.log("OI");
};

// first-class objects (Objetos de primeira classe)
// Fucntions expression -> utiliza a função como um dados

const souUmDado = function() {
    console.log("Sou um dado");
};

souUmDado ();

// pode-se utilizar a função como argumento de outra função

function executaFuncao (funcao){
    funcao();
};

executaFuncao(souUmDado);

// Arrow function 

const funcaoArrow = () => {
    console.log("Sou uma função arrow");
};

funcaoArrow();

// dentro de um objeto

const obj = {
    // uma maneira de implementar
    falar: function(){
        console.log("Sou um objeto");
    },
    // outra maneira de implementar
    bomDia(){
        console.log("Bom dia");
    }
};

obj.falar();
obj.bomDia();
