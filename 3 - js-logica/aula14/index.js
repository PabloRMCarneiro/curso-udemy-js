/* let controle = 0;

while(controle <= 10){
    console.log(controle);
    controle++;
} */

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random (1,50);

while( rand !== 10){
    rand = random (1, 50);
    console.log(rand);
}

do { // sempre executa uma primeira vez e depois verifica a condição
    rand = random (1, 50);
    console.log(rand);
}while(rand !== 10);
