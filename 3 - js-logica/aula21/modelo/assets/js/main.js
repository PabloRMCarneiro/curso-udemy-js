const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.start');
const pausar = document.querySelector('.stop');
const zerar = document.querySelector('.reset');
let seconds = 0;
let timer_aux;

function showTheTimer(seconds){
    data = new Date(seconds * 1000);

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

function startTimer(){
    timer_aux = setInterval(function(){
        seconds++;
        timer.innerHTML = showTheTimer(seconds);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    timer.classList.remove('pausado');
    clearInterval(timer_aux);
    startTimer();
});

pausar.addEventListener('click', function(){
    timer.classList.add('pausado');
    clearInterval(timer_aux);
});

zerar.addEventListener('click', function(){
    clearInterval(timer_aux);
    timer.classList.remove('pausado');
    timer.innerHTML = '00:00:00';
    seconds = 0;
});