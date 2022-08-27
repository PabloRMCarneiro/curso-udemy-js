const pessoa1 = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,

    imprime(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos.`); // a palavra reservada this referencia aos proprios atributos do objeto => OBRIGATORIO O USO DO THIS
    },

    incrementaIdade(){
        this.idade++;
    }

};

function criaPessoa(nome, sobrenome, idade){ // uma função que cria objeto pessoa
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('Pablo', 'Ryan', 20);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);    

pessoa1.imprime();

pessoa1.incrementaIdade();

pessoa1.imprime();