// Escreva uma função que recebe 2 numeros e retorne o maior deles

function maior (num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(maior(5,9))

const max2 = (x, y) => x > y ? x : y;

console.log(max2(10,5))