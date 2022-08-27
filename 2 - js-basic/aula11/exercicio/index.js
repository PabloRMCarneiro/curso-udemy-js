function naoAtualizar(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    /* form.onsubmit = function (evento){
        evento.preventDefault();
    }; */
    
    const pessoas = [];
    
    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p/>`
        
        console.log(pessoas)
    }
    form.addEventListener('submit', recebeEventoForm);

}
naoAtualizar();