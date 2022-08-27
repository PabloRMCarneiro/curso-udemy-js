const nome = 'João';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Otávio'; // variável local sem variar a função falaNome();
    falaNome();
}

usaFalaNome();