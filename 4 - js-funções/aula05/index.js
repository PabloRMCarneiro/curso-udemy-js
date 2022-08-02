const rand = (min = 1000, max = 3000) => Math.floor(Math.random()*(max - min) + min);

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback();
    
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback();
    }, rand());
}

// callback hell -> ordenação de precedência das funções 'fim' so irá aparecer posterior a execução de f3, assim como f3 será executada posterior a f2 e f2 posterior a f1

/* f1(function(){
    f2(function(){
        f3(function(){
            console.log('fim')
        })
    })
}) */

// maneira menos poluída de se construir callbacks

f1( f1Callback );

function f1Callback(){
    f2( f2Callback );
}

function f2Callback(){
    f3( f3Callback );
}

function f3Callback(){
    console.log('fim');
}