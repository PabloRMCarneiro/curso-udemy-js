const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let numero of numeros){
    
    if(numero === 2){
        console.log('Pulou o dois');
        continue;
    }
    if (numero === 7){
        console.log('Encontrou o sete e saiu');
        break;
    }
    console.log(numero);
}