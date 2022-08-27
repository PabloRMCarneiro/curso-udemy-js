// TIPOS PRIMITIVOS DE DADOS

const nome = 'Nome'; // string
const nome2 = 'Nome'; // string
const nome3 = `Nome`; // string

const numero = 12; // number
const numero2 = 12.5; // number

let aux; // undefined -> não aponta para local nenhuma na memoria (definido pelo engine JS)
let aux2 = null; // valor nulo -> aponta para local nenhuma na memoria (definido pelo programador) 

const boolean = true; // boolean
const boolean2 = false; // boolean

// OPERADORES

/*
    * + -> soma/concatenação
    * - -> subtração
    * * -> multiplicação
    * / -> divisão
    * % -> módulo -> resto da divisão
    * ++ -> incrementação
    * -- -> decrementação
    * ** -> exponenciação
    * += -> soma e atribuição
    * -= -> subtração e atribuição
    * *= -> multiplicação e atribuição
    * /= -> divisão e atribuição
    * %= -> módulo e atribuição
    * **= -> exponenciação e atribuição
    * == -> igualdade
    * != -> diferente
    * === -> igualdade estrita
    * !== -> diferente estrito
    * > -> maior que
    * < -> menor que
    * >= -> maior ou igual que
    * <= -> menor ou igual que
    * && -> e
    * || -> ou
    * ! -> negação
    * &&= -> e e atribuição
    * ||= -> ou e atribuição
 
*/ 

// NaN -> Not a Number => possivel erro de calculo de facil solução

const num1 = Number("1.2"); // converte uma string para numero
const num2 = Number("1");
console.log(num1, num2);