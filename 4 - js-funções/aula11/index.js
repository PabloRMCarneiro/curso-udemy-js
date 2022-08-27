// funções geradoras

function* geradora1(){
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next().value); // valor 1
console.log(g1.next().value); // valor 2
console.log(g1.next().value); // valor 3
console.log(g1.next()) // done: true -> acabou os valores

function* geradora2(){
    let i = 0;
    while(true){
        yield i++;
    }
}

const g2 = geradora2();

for (let i = 0; i < 10; i++){
    console.log(g2.next().value);
}

console.log('#######');

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}