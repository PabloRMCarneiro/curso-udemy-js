// IIFE -> Immeately invoked function expression

(function(){
    console.log(123456)
})(); // (function(){ 'funcao anonima' })(); -> a funçao é automaticamente invocada

(function(){
    const nome = 'Luiz'
    console.log(nome)
})();

const nome = 'Otávio'
console.log(nome)


(function(){
    const sobrenome = 'Ryan';

    function criaNome (nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Pablo'));
    }

    falaNome();

})();