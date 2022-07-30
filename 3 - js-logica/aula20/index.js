function mostraHora(){
    data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

function funcaoDoInterval(){
    console.log(mostraHora());
}

/* setInterval(funcaoDoInterval, 1000); // executa a função a cada 1 segundo -> como se fosse um relogio */

const timer = setInterval (function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);